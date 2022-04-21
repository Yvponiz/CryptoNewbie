import type { NextApiRequest, NextApiResponse } from 'next'


export async function getTrending() {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
    const data = await response.json()

    return data.coins
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    res.status(200).json(await getTrending())
}

