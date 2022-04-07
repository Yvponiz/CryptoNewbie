import type { NextApiRequest, NextApiResponse } from 'next'


const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export default async function searchCrypto(crypto:string) {
    let data = await CoinGeckoClient.coins.fetch(crypto.toLowerCase(), {});
    return data.data
}
