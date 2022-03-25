import type { NextApiRequest, NextApiResponse } from 'next'
import { TypeCompte, Utilisateur } from "../../src/entity/Utilisateur";
import * as utils from "./utils"; //tout ce qui est dans utils


export default function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  utils.getConnection().then(async connection => {
    const { nom, prenom, courriel, type_compte, password, date_naissance } = req.body // arguments du body reçu du form dans signup.tsx
    const user = new Utilisateur(nom, prenom, courriel, TypeCompte[type_compte].Montant, password, date_naissance)

    await connection.manager.save(user);
    console.log("User has been saved");

    res.status(200).redirect("/connexion")
  }).catch(error => {
    res.status(500).send(error.toString())
  });
}

//status 200 = tout est ok
//status 500 = pas bon
