import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../entity/User';
import * as utils from "../../utils/DButils";
import { getSession } from '../../common/getSession';

export default function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<{status:string, errors:string[]}>
) {
  utils.getConnection().then(async (connection) => {

    const { email, password} = req.body
    const userRepo = connection.getRepository<User>("User");
    const user = await userRepo.findOne({email, password:btoa(password)});

    if(user === undefined){
        res.status(400).json( {status:"erreur", errors:["Courriel ou mot de passe invalide"]});
        return
    }

    const session = await getSession(req, res);
    session.user = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      accountType: user.accountType,
      accountAmount: user.accountAmount,
      dateOfBirth: user.dateOfBirth
    }

    await session.commit();
    
    console.log("User has connected");

    res.status(200).json({status:"success", errors:[]})
  }).catch(error => {
    res.status(500).send(error.toString())
    console.log(error)
  });
}