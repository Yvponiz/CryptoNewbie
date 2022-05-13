import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "../../common/getSession";
import * as utils from "../../backend/DButils";
import { User } from "../../backend/entity/User";
import { AccountType } from "../../common/typecompte";
import { Portfolio } from "../../backend/entity/Portfolio";
import { Crypto } from "../../backend/entity/Crypto";

export default async function getServerSidePortolio(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const connection = await utils.getConnection()
    try {
        const session = await getSession(req, res);
        const userRepo = connection.manager.getRepository<User>("User");
        const portfolioRepo = connection.manager.getRepository<Portfolio>("Portfolio");
        const cryptoRepo = connection.manager.getRepository<Crypto>("Crypto");
        const user = await userRepo.findOne({ id: session.user.id });

        const portfolio = portfolioRepo.findOne({
            relations: ['user'],
            where: { 
                user: user, 
            }
        });

        const [crypto, cryptoCount] = await cryptoRepo.findAndCount({
            relations: ['portfolio'],
            where: {
                portfolio: portfolio
            }
        })

        for(let i = 0 ; i < (await crypto).length; i++){
            console.log([crypto[i]], cryptoCount)
        }

        return res.json({
            value: (await portfolio).value,
            crypto: crypto
        })

    } catch (error) {
        return res.status(500).send(error.toString())
    }
}