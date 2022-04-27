import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../backend/entity/User';
import * as utils from "../../backend/DButils";
import { getSession } from '../../common/getSession';

export default function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<{status:string, errors:string[]}>
) {
  utils.getConnection().then(async () => {

    const { email, password} = req.body
    const user = await User.findOne({email, password:btoa(password)})  

    if(user === undefined){
        res.status(400).json( {status:"erreur", errors:["Courriel ou mot de passe invalide"]})
        return
    }

    const session = await getSession(req, res);
    console.log(session.views);
    session.views = session.views ? session.views + 1 : 1; // si pas setter va setter à 1 si setter incremente
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

//status 200 = tout est ok
//status 500 = pas bon
