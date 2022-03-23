import type { NextApiRequest, NextApiResponse } from 'next'
import * as utils from "../api/utils"; //tout ce qui est dans utils


const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

var getPong = async () => {
    let data = await CoinGeckoClient.ping();
    return data
};

export default function getPing(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    getPong().then(async connection => {

        //   await CoinGeckoClient.ping;
        console.log("Ping");

        res.status(200).send("Ping Successful")
    }).catch(error => {
        res.status(500).send(error.toString())
    });
}