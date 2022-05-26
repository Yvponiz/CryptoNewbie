import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../backend/entity/User';
import * as utils from "../../backend/DButils";
import { getSession } from '../../common/getSession';

export default function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string, errors: string[] }>,
) {
  utils.getConnection().then(async connection => {

    const { email } = req.body;
    const session = await getSession(req, res);
    const userRepo = connection.manager.getRepository(User);
    const user = await userRepo.findOne({ id: session.user.id });
    const regexEmail = /@./;

    if (email === "" || regexEmail.test(email) == false) {
      res.status(400).json({ status: "erreur", errors: ["Entrez une adresse courriel valide"] });
      return
    }

    (await user).email = email;
    session.user.email = email;
    await userRepo.save(user);
    await session.commit();


    res.status(200).json({ status: "success", errors: [] })
  }).catch(error => {
    res.status(500).send(error.toString())
    console.log(error)
  });
}



