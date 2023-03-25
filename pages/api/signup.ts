import type { NextApiRequest, NextApiResponse } from 'next';
import { Portfolio } from '../../entity/Portfolio';
import { User } from "../../entity/User";
import { AccountType } from '../../common/typecompte';
import * as utils from "../../utils/DButils";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string, errors: string[] }>
) {
  const connection = await utils.getConnection()
  try {
    const { lastName, firstName, email, accountType, password, confPassword, dateOfBirth} = req.body // arguments reçu du form dans signupForm.tsx
    const emailReg = /@/;
    const verifDate = new Date();
    verifDate.setFullYear(verifDate.getFullYear()-18);
    const dateToCheck = new Date(dateOfBirth);

    if (dateToCheck >= verifDate){
      res.status(400).json({ status: "erreur", errors: ["Vous devez avoir l'âge légal pour utiliser cet plateforme"]})
      return
    }
    else if (password !== confPassword) {
      res.status(400).json({ status: "erreur", errors: ["Les deux mots de passe ne sont pas identiques"] })
      return
    }
    else if (emailReg.test(email) == false) {
      res.status(400).json({ status: "erreur", errors: ["Le courriel n'est pas valide"] })
      return
    }

    // Classes
    const user = new User(lastName, firstName, email, AccountType[accountType].Type, AccountType[accountType].Amount, password, dateOfBirth)
    const portfolio = new Portfolio()

    // Repos
    const cryptoRepo = connection.manager.getRepository("Crypto");
    const portfolioRepo = connection.manager.getRepository("Portfolio");
    const userRepo = connection.manager.getRepository("User");

    // Liens entre tables
    portfolio.value = 0;
    user.portfolio = portfolio;

    // Sauvegarde des entities(tables)
    await portfolioRepo.save(portfolio);
    await userRepo.save(user);

    console.log("User has been saved");

    return res.json({ status: "success", errors: [] })

  } catch (error) {
    return res.status(500).send(error.toString())
  }
}
