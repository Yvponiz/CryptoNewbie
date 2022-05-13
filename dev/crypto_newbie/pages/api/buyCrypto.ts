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
  res: NextApiResponse<{ status: string, errors: string[] }>,
) {
  const connection = await utils.getConnection()
  try {

    const { quantity, total, name, nameId } = req.body;
    const session = await getSession(req, res);

    const userRepo = connection.manager.getRepository<User>("User");
    const cryptoRepo = connection.manager.getRepository<Crypto>("Crypto");
    const portfolioRepo = connection.manager.getRepository<Portfolio>("Portfolio");
    const transactionsRepo = connection.manager.getRepository<Transactions>("Transactions");
    const user = await userRepo.findOne({ id: session.user.id });
    
    const crypto = new Crypto(nameId, name, quantity);
    
    const portfolio = portfolioRepo.findOne({
      relations: ['user'],
      where: { user: user }
    });
    const deduction = (await portfolio).value - total;
    (await portfolio).value = deduction;
    crypto.portfolio = (await portfolio);
    
    const transaction = new Transactions();
    let today = new Date();
    (await transaction).crypto = name;
    (await transaction).date_transaction = formatDate(today.getDay(),today.getMonth(), today.getFullYear());
    (await transaction).montant = total;
    transaction.user = user;
    
    await transactionsRepo.save(transaction);
    await portfolioRepo.save(await portfolio);
    await cryptoRepo.save(crypto);
    await userRepo.save(user);
    await session.commit();

    console.log("TRANSACTION", transaction);
    //return res.status(200).json({ status: "success", errors: [] })
  } catch (error) {
    res.status(500).send(error.toString())
    console.log(error)
  }
}



