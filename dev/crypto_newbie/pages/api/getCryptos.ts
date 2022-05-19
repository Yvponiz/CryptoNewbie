import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "../../common/getSession";
import * as utils from "../../backend/DButils";
import { User } from "../../backend/entity/User";
import { Portfolio } from "../../backend/entity/Portfolio";
import { Crypto } from "../../backend/entity/Crypto";


export default async function getServerSideCryptos(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const connection = await utils.getConnection()
    try {
        const session = await getSession(req, res);

        // Repos
        const userRepo = connection.manager.getRepository<User>("User");
        const portfolioRepo = connection.manager.getRepository<Portfolio>("Portfolio");
        const cryptoRepo = connection.manager.getRepository<Crypto>("Crypto");
        const user = await userRepo.findOne({ id: session.user.id });

        // Trouves le portfolio de l'usager
        const portfolio = await portfolioRepo.findOne({
            relations: ['user'],
            where: { user: user }
        });

        // Trouve les cryptos de l'usager
        const [crypto, cryptoCount] = await cryptoRepo.findAndCount({
            relations: ['portfolio'],
            where: {
                portfolio: portfolio
            }
        })

        let c: Crypto[] = new Array();

        for (let i = 0; i < cryptoCount; i++) {
            c[i] = crypto[i]
        }

        return res.json({cryptos: c})

    } catch (error) {
        return res.status(500).send(error.toString())
    }
}