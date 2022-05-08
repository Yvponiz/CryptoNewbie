import { FunctionComponent, useEffect, useState } from "react";
import { Coin } from "../utils/coin";

export default function CryptoInfos() {
    const [handlerState, setHandlerState] = useState({market_data:{current_price:{cad:""}}});

    useEffect(() => {
        let coin = sessionStorage.getItem('selectCoin');
        //console.log(coin);
        //console.log(`https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/`);
        fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/`)
        .then((res) => res.json())
        .then((data) => setHandlerState(data))
    }, []);



    return (
        <div className="crypto-info">
            <div className="crypto-info-name">{handlerState.name}</div>
            <div className="crypto-info-price">{handlerState.market_data.current_price.cad} $</div>
        </div>
        
    )
}