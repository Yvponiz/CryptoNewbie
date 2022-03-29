import type { NextApiRequest, NextApiResponse } from 'next';
import { ListePerso } from '../../backend/entity/ListePerso';
import { Portfolio } from '../../backend/entity/Portfolio';
import {Utilisateur } from "../../backend/entity/Utilisateur";
import { Crypto } from '../../backend/entity/Crypto';
import { TypeCompte } from '../../common/typecompte';
import { Transactions } from '../../backend/entity/Transactions';
import * as utils from "../../backend/utils"; //tout ce qui est dans utils


export default function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<{status:string}>
) {
  utils.getConnection().then(async connection => {
    // Arguments
    const { nom, prenom, courriel, type_compte, password, date_naissance } = req.body // arguments reçu du form dans signup.tsx
    //const nomListe = req.body // arguments reçu de création de liste
    const nomListe = "nom"

    // Classes
    const user = new Utilisateur(nom, prenom, courriel, TypeCompte[type_compte].Valeur, password, date_naissance)
    const portfolio = new Portfolio()
    const transaction = new Transactions()
    const listes = new ListePerso(nomListe)
    const cryptomonnaie = new Crypto("nom", "symbol", 2.00, 3.00) // valeur temporaire*****

    // Repos
    const cryptoRepo = connection.manager.getRepository(Crypto)
    const listesRepo = connection.manager.getRepository(ListePerso)
    const transactionRepo = connection.manager.getRepository(Transactions)
    const portfolioRepo = connection.manager.getRepository(Portfolio)
    const userRepo = connection.manager.getRepository(Utilisateur)

    // Liens entre tables
    listes.crypto = [cryptomonnaie] 
    portfolio.valeur = TypeCompte[type_compte].Valeur
    portfolio.liste_perso = [listes]
    user.transactions = [transaction]
    user.portfolio = portfolio 

    // Sauvegarde des entities(tables)
    await cryptoRepo.save(cryptomonnaie);
    await listesRepo.save(listes);
    await transactionRepo.save(transaction)
    await portfolioRepo.save(portfolio)
    await userRepo.save(user)
    console.log("User has been saved");

    res.status(200).json({status:"success"})
  }).catch(error => {
    res.status(500).send(error.toString())
  });
}

//status 200 = tout est ok
//status 500 = pas bon
