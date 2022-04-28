import type { NextApiRequest, NextApiResponse } from 'next'

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export async function searchCrypto(crypto) {
    let data = await CoinGeckoClient.coins.fetch(crypto, {});
    return data.data
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await searchCrypto(crypto))
}
