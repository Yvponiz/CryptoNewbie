import type { NextApiRequest, NextApiResponse } from 'next'

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export default async function getCoins(
    req: NextApiRequest,
    res: NextApiResponse<{ status?: string, error?: string}>
) {
    try {
        let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=25&page=1&sparkline=false")
        const data = await response.json();
        // console.log(data)

        res.status(200).json(data)
    }
    catch (error: any) {
        return res.status(500).json({ error: error.toString() })
    }
}
