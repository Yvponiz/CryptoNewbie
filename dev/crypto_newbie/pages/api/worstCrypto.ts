import type { NextApiRequest, NextApiResponse } from 'next'

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export async function getWorst() {
    let data = await CoinGeckoClient.coins.all({order: CoinGecko.ORDER.HOUR_24_ASC})

    return data.data
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await getWorst())
}