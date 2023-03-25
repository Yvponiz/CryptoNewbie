import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../entity/User';
import * as utils from "../../utils/DButils";
import { getSession } from '../../common/getSession';

export default function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<{status:string, errors:string[]}>,
) {
  utils.getConnection().then(async connection => {

    const {oldPassword, newPassword, confPassword} = req.body;
    const session = await getSession(req, res);
    const userRepo = connection.manager.getRepository<User>("User");
    const user = await userRepo.findOne({id: session.user.id});

    if (newPassword !== confPassword){
        res.status(400).json( {status:"erreur", errors:["Les deux mots de passes ne sont pas identiques"]})
        return
    }
    
    if(user.password !== btoa(oldPassword)){
        res.status(400).json( {status:"erreur", errors:["Mot de passe invalide"]})
        return
    }

    (await user).password = btoa(newPassword);
    await userRepo.save(user);
    await session.commit();
    console.log("Password Changed");

    res.status(200).json({status:"success", errors:[]})
  }).catch(error => {
    res.status(500).send(error.toString())
    console.log(error)
  });
}



