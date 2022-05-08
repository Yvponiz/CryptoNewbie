import type { NextApiRequest, NextApiResponse } from 'next'

export async function searchCoin() {
    if(typeof window !== 'undefined'){
        let coin = sessionStorage.getItem('coinId');
        console.log("crytoInfos/Coin: ", coin);
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
        const data = await response.json()
    
        return data
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await searchCoin())
}

