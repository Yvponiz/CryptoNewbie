// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Utilisateur } from "../../src/entity/Utilisateur";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

createConnection({
    type: "postgres",
    host: "ec2-34-228-100-83.compute-1.amazonaws.com",
    port: 5432,
    username: "bumgbgdomzwqry",
    password: "3bd47ee6f2ca055652a4c51793c1f4e77a99c50cffa7bcd2807fa4fe9907d371",
    database: "d8133tb5ul9k8g",
    entities: [ //table
        Utilisateur
    ],
    synchronize: true, //true pour créer la bd, false pour lier
    logging: true
}).then(async connection => {
    const user = new Utilisateur(user.nom, user.prenom, user.courriel, user.id_type_compte, user.password, user.date_naissance)
    user.courriel = "jim@jim.com"
    user.id_type_compte = 2
    user.password = "AAAaaa111"
    user.nom = "jam"
    user.prenom = "jim"
    user.date_naissance = "2022-08-22"

    await connection.manager.save(user);
    console.log("User has been saved");
}).catch(error => console.log(error));
