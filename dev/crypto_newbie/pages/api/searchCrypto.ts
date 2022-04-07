import type { NextApiRequest, NextApiResponse } from 'next'


const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
let crypto;

export async function searchCrypto(crypto) {
    let data = await CoinGeckoClient.coins.fetch(crypto.toLowerCase(), {});
    return data.data
}

export function setCrypto(crypto){
    this.crypto = crypto;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>,
) {
    res.status(200).json(await searchCrypto(crypto))
}

