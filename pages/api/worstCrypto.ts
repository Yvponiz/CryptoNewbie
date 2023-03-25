import type { NextApiRequest, NextApiResponse } from 'next'

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export default async function getWorst(
    req: NextApiRequest,
    res: NextApiResponse<{ status?: string, error?: string}>
) {
    try{
        let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=h24_change_asc&per_page=3')
        const data = await response.json();

        res.status(200).json(data)
    }
    catch (error: any) {
        return res.status(500).json({ error: error.toString() })
    }
}