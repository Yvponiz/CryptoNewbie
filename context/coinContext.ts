import { useState, createContext, useEffect } from "react";
import { Coin } from "../models/coin";

export const CoinContext = createContext<Coin | undefined>(undefined)

export function updateCoin(coinId, setCoinState) {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        .then((res) => res.json())
        .then((data) => setCoinState(data as Coin))
}

export function getCoinState(coinId?) {
    const [coinState, setCoinState] = useState<Coin>()

    if(coinId) {
        useEffect(() => {
            updateCoin(coinId, setCoinState)
        }, [])
    }

    return [coinState as Coin, setCoinState]
}

// Source d'exemple d'utilisation de Context : 
// https://blog.logrocket.com/how-to-use-react-context-typescript/
