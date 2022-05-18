import { FunctionComponent, useEffect, useState } from "react";
import { Coin } from "../utils/coin";

interface Crypto {
    nameId: string,
    name: string,
    quantity: number,
    averagePrice: number
}

export const PortfolioInfo: FunctionComponent = ({}) => {
    
    
    const [portfolio, setPortfolio] = useState({
        value: null,
        accountAmount: null
    })
    const [crypto, setCrypto] = useState<Crypto[]>([]);
    
    const setIdCoin = ((id)=>{
        sessionStorage.setItem("coinId", id);
    })

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
            <div className="portfolio-section">
                <div className="montant-investi-section"> 
                    <li>Montant investi</li>
                    <li>{portfolio.value} $</li> 
                    <li>{portfolio.accountAmount}</li>
                </div>
                <div className="tab-portfolio-info">
                    <div className="title-section">
                        <li>Nom</li>
                        <li>Quantité</li>
                        <li>Prix moyen</li>
                    </div>
                    <div className="crypto-section">{crypto.slice(0,6).map(({name, quantity, nameId, averagePrice}) =>
                        <a href="coinInfo" onClick={(()=>setIdCoin(nameId))}>
                            <li>{name}</li>
                            <li>{quantity}</li>
                            <li>{averagePrice} $</li>
                        </a>
                )} </div>
                </div>
            </div>
        )
    }
}