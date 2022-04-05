import type { NextApiRequest, NextApiResponse } from 'next'


const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

// export async function getPing() {
//     let data = await CoinGeckoClient.ping();
//     return data.data.gecko_says
// };

export async function getCoins() {
    let data = await CoinGeckoClient.coins.all(CoinGecko.ORDER["GECKO_ASC"])
    return data.data
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await getCoins())
}
