import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import quickSort from "../utils/quickSort";

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
            setPortfolio(data)
            setCrypto(JSON.parse(data.crypto) as Crypto[])
        })
    }, [])  

    const sort = (async (e) => {
        console.log(crypto);
        let newList = await quickSort(crypto, e.target.id)
        setCrypto(newList);
    })

    if (portfolio) {

        return (
            <div className="portfolio-section">
                <div className="montant-investi-section"> 
                    <li>Montant investi</li>
                    <li>{portfolio.value} $</li> 
                    <li>Montant restant</li>
                    <li>{portfolio.accountAmount} $</li>
                </div>
                <div className="tab-portfolio-info">
                    <div className="title-section">
                        <li onClick={sort} id="name_crypto" className="title-elem">Nom</li>
                        <li onClick={sort} id="quantity" className="title-elem">Quantité</li>
                        <li onClick={sort} id="average_price" className="title-elem">Prix moyen</li>
                    </div>
                    <div className="crypto-section">{crypto.slice(0, crypto.length).map(({name, quantity, nameId, averagePrice}) =>
                        <a
                            href="coinInfo"
                            onClick={(()=>setIdCoin(nameId))}
                            key={nameId}
                        >
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