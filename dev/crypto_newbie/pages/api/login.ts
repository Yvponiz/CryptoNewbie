import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../backend/entity/User';
import * as utils from "../../backend/utils";
// import { getSession } from '../../common/getSession';

export default function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<{status:string, errors:string[]}>
) {
  utils.getConnection().then(async () => {

    const { courriel, password} = req.body
    const user = await User.findOne({email:courriel, password:btoa(password)}) // 

    if(user === undefined){
        res.status(400).json( {status:"erreur", errors:["Courriel ou mot de passe invalide"]})
        return
    }

    // const session = await getSession(req, res);
    // console.log(session.count);
    // session.count = session.count?session.count++:1; // si pas setter va setter à 1 si setter incremente
    // session.userid = user.id;
    // await session.commit();
    
    console.log("User has connected");

    res.status(200).json({status:"success", errors:[]})
  }).catch(error => {
    res.status(500).send(error.toString())
  });
}

//status 200 = tout est ok
//status 500 = pas bon
