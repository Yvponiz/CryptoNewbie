import type { NextApiRequest, NextApiResponse } from 'next';
import { Portfolio } from '../../backend/entity/Portfolio';
import { User } from "../../backend/entity/User";
import { Crypto } from '../../backend/entity/Crypto';
import { AccountType } from '../../common/typecompte';
import { Transactions } from '../../backend/entity/Transactions';
import * as utils from "../../backend/DButils";


export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string, errors: string[] }>
) {
  const connection = await utils.getConnection()
  try {

    // Arguments
    const { lastName, firstName, email, accountType, password, confPassword, dateOfBirth } = req.body // arguments reçu du form dans signupForm.tsx
    if (password !== confPassword) {
      res.status(400).json({ status: "erreur", errors: ["Les deux mots de passes ne sont pas identiques"] })
      return
    }

    // Classes
    const user = new User(lastName, firstName, email, AccountType[accountType].Type, AccountType[accountType].Amount, password, dateOfBirth)
    const portfolio = new Portfolio()
    const crypto = new Crypto("dogecoin", "Dogecoin", 10) // Cadeau de bienvenue

    // Repos
    const cryptoRepo = connection.manager.getRepository("Crypto");
    const portfolioRepo = connection.manager.getRepository("Portfolio");
    const userRepo = connection.manager.getRepository("User");

    // Liens entre tables
    portfolio.value = AccountType[accountType].Amount;
    portfolio.crypto = [crypto];
    user.portfolio = portfolio;

    // Sauvegarde des entities(tables)
    await cryptoRepo.save(crypto);
    await portfolioRepo.save(portfolio);
    await userRepo.save(user);

    console.log("User has been saved");

    return res.json({ status: "success", errors: [] })

  } catch (error) {
    return res.status(500).send(error.toString())
  }
}
