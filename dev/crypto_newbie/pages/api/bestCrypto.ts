import type { NextApiRequest, NextApiResponse } from 'next'

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export async function getBest() {
    let data = await CoinGeckoClient.coins.all({order: CoinGecko.ORDER.HOUR_24_DESC})

    return data.data
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await getBest())
}