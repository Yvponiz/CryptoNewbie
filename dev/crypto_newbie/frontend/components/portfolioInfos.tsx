import { FunctionComponent, useEffect, useState } from "react";
import { Coin } from "../utils/coin";

interface Crypto {
    nameId: string,
    name: string,
    quantity: number
}

export const PortfolioInfo: FunctionComponent = ({}) => {
    const [portfolio, setPortfolio] = useState({
        value: null
    })
    const [crypto, setCrypto] = useState<Crypto[]>([]);
    
    useEffect(() => {
        fetch('/api/getPortfolio')
        .then((res) => res.json())
        .then((data) => {
            console.log("DATA",JSON.parse(data.crypto))
            setPortfolio(data)
            setCrypto(JSON.parse(data.crypto) as Crypto[])
        })
    }, [])   

    if (portfolio) {

        return (
            <div>
                <li> Montant : {portfolio.value}</li>
                <div>Crypto : {crypto.slice(0,6).map(({name,quantity, nameId}) =>
                    <a href="">
                        <li>name: {name}</li>
                        <li>{quantity}</li>
                    
                    </a>
                )} </div>

            </div>
        )
    }
}