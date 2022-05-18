import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "../../common/getSession";
import * as utils from "../../backend/DButils";
import { User } from "../../backend/entity/User";
import { Portfolio } from "../../backend/entity/Portfolio";
import { Crypto } from "../../backend/entity/Crypto";


async function getPortfolioValue(coinId, quantity){
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        const data = await response.json();
        let price = await data.market_data.current_price.cad;
        let portfolioValue = price * quantity;

        return portfolioValue;
    }
    catch(error){
        console.log(error)
    }
}

export default async function getServerSidePortolio(
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

        // Trouve le portfolio de l'usager
        const portfolio = await portfolioRepo.findOne({
            relations: ['user'],
            where: {
                user: user
            }
        });

        // Compte les crypto dans le portfolio de l'usager
        const [crypto, cryptoCount] = await cryptoRepo.findAndCount({
            relations: ['portfolio'],
            where: {
                portfolio: portfolio
            }
        })

        // Calcul valeur portfolio
        let portfolioValue: number = 0;
        for (let i = 0; i < cryptoCount; i++){
           portfolioValue += await getPortfolioValue(crypto[i].nameId, crypto[i].quantity)
        }

        portfolio.value = portfolioValue;
        portfolioRepo.save(portfolio);
        userRepo.save(user);

        return res.json({
            value: (await portfolio).value.toFixed(2),
            crypto: JSON.stringify(crypto)
        })

    } catch (error) {
        return res.status(500).send(error.toString())
    }
}