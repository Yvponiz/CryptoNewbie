// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import "reflect-metadata";
import { createConnection } from "typeorm";
import { utilisateur } from "../../src/entity/user";

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
    host: "localhost",
    port: 5432,
    username: "yvan",
    password: "AAAaaa111",
    database: "test",
    entities: [ //table
        utilisateur
    ],
    synchronize: true, //true pour créer la bd, false pour lier
    logging: true
}).then(async connection => {
    const user = new utilisateur(user.nom, user.prenom, user.courriel, user.id_type_compte, user.password)
    user.courriel = "jim@jim.com"
    user.id_type_compte = 2
    user.password = "AAAaaa111"
    user.nom = "jam"
    user.prenom = "jim"

    await connection.manager.save(user);
    console.log("User has been saved");
}).catch(error => console.log(error));
