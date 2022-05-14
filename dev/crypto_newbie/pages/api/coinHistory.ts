import type { NextApiRequest, NextApiResponse } from 'next'

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export async function getHistory() {
    let data = await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
        from: 160000000, // la date il y a un an
        to: 160050000, // exemple de valeur
        vs_currency: 'cad',
      });
    return data.data
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await getHistory())
}