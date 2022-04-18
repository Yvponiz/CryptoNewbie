import type { NextApiRequest, NextApiResponse } from 'next'
import { getCoin } from '../../frontend/components/searchBar';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

let coin;
export function setCoin(crypto){
    coin = crypto;
}

export async function searchCrypto() {
    let data = await CoinGeckoClient.coins.fetch(coin.toLowerCase(), {});
    return data.data
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>,
) {
    res.status(200).json(await searchCrypto());
}

