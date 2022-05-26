import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../backend/entity/User';
import * as utils from "../../backend/DButils";
import { getSession } from '../../common/getSession';
import { Crypto } from '../../backend/entity/Crypto';
import { Portfolio } from '../../backend/entity/Portfolio';
import { Transactions } from '../../backend/entity/Transactions';
import formatDate from '../../frontend/utils/formatDate';

export default async function submitForm(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const connection = await utils.getConnection()
  try {

    const { quantity, total, name, nameId } = req.body;
    const session = await getSession(req, res);

    // Repos
    const userRepo = connection.manager.getRepository<User>("User");
    const cryptoRepo = connection.manager.getRepository<Crypto>("Crypto");
    const portfolioRepo = connection.manager.getRepository<Portfolio>("Portfolio");
    const transactionsRepo = connection.manager.getRepository<Transactions>("Transactions");

    // Trouve l'usager connecté, lié avec variable de session
    const user = await userRepo.findOne({ id: session.user.id });

    const crypto = new Crypto(nameId, name, quantity);
    const transaction = new Transactions();

    // Trouve le portofolio de l'usager connecté
    const portfolio = await portfolioRepo.findOne({
      relations: ['user'],
      where: { user: user }
    });

    // Déduction du montant de la transaction du compte de l'usager
    const userAccount = await user.accountAmount;

    if (total > userAccount) {
      res.status(400).json({ status: "erreur", errors: ["Pas assez d'argent dans le compte"] });
      return
    }
    else {
      const deduction = user.accountAmount - total;
      user.accountAmount = deduction;
    }

    // Lier la crypto au portfolio de l'usager
    crypto.portfolio = await portfolio;

    // Trouve la quantité d'une crypto l'ajouter
    const cryptoBought = await cryptoRepo.findOne({
      relations: ['portfolio'],
      where: {
        portfolio: portfolio,
        nameId: nameId,
      }
    });

    let newQuantity: number;
    let newAveragePrice: number;
    let averagePrice = total / quantity;


    if (cryptoBought) {
      newQuantity = cryptoBought.quantity + parseInt(quantity);
      newAveragePrice = (cryptoBought.averagePrice + averagePrice)/2;
    }
    else {
      newQuantity = parseInt(quantity);
      newAveragePrice = averagePrice;
    }

    // Sauvegarde de la crypto. Si usager en possède déjà, update
    cryptoRepo.upsert([
      {
        nameId: nameId,
        name: name,
        quantity: newQuantity,
        portfolio: crypto.portfolio,
        averagePrice: newAveragePrice
      }
    ], ["nameId"]);
    
    crypto.averagePrice = total/quantity;

    // Sauvegarde de la transaction
    let today = new Date();
    transaction.crypto = name;
    transaction.date_transaction = formatDate(today.getDay(), today.getMonth(), today.getFullYear());
    transaction.montant = total;
    transaction.user = user;

    await transactionsRepo.save(transaction);
    await portfolioRepo.save(portfolio);
    await userRepo.save(user);
    await session.commit();

    return res.status(200).json({ status: "success", errors: [] })
  } catch (error) {
    res.status(500).send(error.toString())
    console.log(error)
  }
}



