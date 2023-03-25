import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "../../common/getSession";
import * as utils from "../../utils/DButils";
import { User } from "../../entity/User";
import { Portfolio } from "../../entity/Portfolio";
import { Transactions } from "../../entity/Transactions";


export default async function getServerSideTransactions(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const connection = await utils.getConnection()
    try {
        const session = await getSession(req, res);

        // Repos
        const userRepo = connection.manager.getRepository<User>("User");
        const portfolioRepo = connection.manager.getRepository<Portfolio>("Portfolio");
        const transactionRepo = connection.manager.getRepository<Transactions>("Transactions");
        const user = await userRepo.findOne({ id: session.user.id });

        // Trouve les transactions de l'usager
        const [transaction, transactionCount] = await transactionRepo.findAndCount({
            relations: ['user'],
            where: {
                user: user
            }
        })

        // Création et remplissage liste de transactions
        type Transaction = {
            crypto: string,
            montant: number,
            date: string,
            type: string
        }

        let t: Transaction[] = new Array();

        for (let i = 0; i < transactionCount; i++) {
            t[i] = {
                crypto: transaction[i].crypto,
                montant: transaction[i].montant,
                date: transaction[i].date_transaction,
                type: transaction[i].type
            }
        }

        return res.json({ transactions: t })

    } catch (error) {
        return res.status(500).send(error.toString())
    }
}