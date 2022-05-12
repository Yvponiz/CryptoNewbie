import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../backend/entity/User';
import * as utils from "../../backend/DButils";
import { getSession } from '../../common/getSession';
import { Crypto } from '../../backend/entity/Crypto';

export default async function submitForm(
  req: NextApiRequest,
  res: NextApiResponse<{status:string, errors:string[]}>,
) {
  const connection = await utils.getConnection()
  try {

    const {quantity, total, name, nameId} = req.body;
    const session = await getSession(req, res);
    const userRepo = connection.manager.getRepository<User>("User");
    const user = await userRepo.findOne({id: session.user.id});
    const crypto = new Crypto(nameId, name, quantity);

    user.portfolio.crypto = [crypto];
    user.accountAmount -= total;
    await userRepo.save(user);
    await session.commit();

    return res.status(200).json({status:"success", errors:[]})
  } catch(error) {
    res.status(500).send(error.toString())
    console.log(error)
  }
}



