import type { NextApiRequest, NextApiResponse } from 'next'
import * as utils from "../api/utils"; //tout ce qui est dans utils


const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export async function getPing() {
    let data = await CoinGeckoClient.ping();
    return data.data.gecko_says
};


export async function getList() {
    let data = await CoinGeckoClient.coins.list();
    return [data.data.find( (coin) => (coin.id === "dogecoin"))] //Temporaire, pour afficher seulement dogecoin
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await getList()) // fonctionne même si en rouge, une fonction doit être async pour que await fonctionne
}
