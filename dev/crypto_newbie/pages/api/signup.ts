import type { NextApiRequest, NextApiResponse } from 'next';
import { PersoList } from '../../backend/entity/PersoList';
import { Portfolio } from '../../backend/entity/Portfolio';
import {User } from "../../backend/entity/User";
import { Crypto } from '../../backend/entity/Crypto';
import { AccountType } from '../../common/typecompte';
import { Transactions } from '../../backend/entity/Transactions';
import * as utils from "../../backend/utils";


export default function signup(
  req: NextApiRequest,
  res: NextApiResponse<{status:string, errors:string[]}>
) {
    utils.getConnection().then(async connection => {
      
      // Arguments
      const { lastName, firstName, email, accountType, password, conf_password, dateOfBirth } = req.body // arguments reçu du form dans signupForm.tsx
      if (password !== conf_password){
        res.status(400).json( {status:"erreur", errors:["Les deux mots de passes ne sont pas identiques"]})
        return
      }
      //const nomListe = req.body // arguments reçu de création de liste
      const listName = "nom"

      // Classes
      const user = new User(lastName, firstName, email, AccountType[accountType].Amount, password, dateOfBirth)
      const portfolio = new Portfolio()
      const transaction = new Transactions()
      const lists = new PersoList(listName)
      const crypto = new Crypto("nom", "symbol", 2.00, 3.00) // valeur temporaire*****

      // Repos
      const cryptoRepo = connection.manager.getRepository(Crypto)
      const listsRepo = connection.manager.getRepository(PersoList)
      const transactionRepo = connection.manager.getRepository(Transactions)
      const portfolioRepo = connection.manager.getRepository(Portfolio)
      const userRepo = connection.manager.getRepository(User)

      // Liens entre tables
      lists.crypto = [crypto] 
      portfolio.value = AccountType[accountType].Amount
      portfolio.perso_list = [lists]
      user.transactions = [transaction]
      user.portfolio = portfolio 
      
      // Sauvegarde des entities(tables)
      await cryptoRepo.save(crypto);
      await listsRepo.save(lists);
      await transactionRepo.save(transaction)
      await portfolioRepo.save(portfolio)
      await userRepo.save(user)

      console.log("User has been saved");

      return res.json({status:"success", errors:[]})
    }).catch(error => {
      return res.status(500).send(error.toString())
    });
}

//status 200 = tout est ok
//status 500 = pas bon
