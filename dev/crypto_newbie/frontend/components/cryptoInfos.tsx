import { useState, useEffect } from 'react'
import { getCoin } from './cryptoList';


export default function CryptoInfos() {
    const [handlerState, setHandler] = useState({ market_data: { current_price: { cad: "" }, market_cap_rank: "", market_cap: { cad: "" }, price_change_percentage_24h: "" } });
    const [coinState, setCoin] = useState("");

    //const coingeckoUrl = (coin) => {
    //    coin = String(coin);
    //    return `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/`;
    //  };

    useEffect(() => {
        if (window.sessionStorage.getItem('selectCoin')) {
            let coin = getCoin();
            //let coin = sessionStorage.getItem('selectCoin');
            console.log(coin);
            fetch(`https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/`).then((response) => {
                response.json().then((jsonData) => {
                    setHandler(jsonData);
                    console.log(handlerState);
                })
            })
        }
    }, []);



    return (
        <p>Infos prochainement...</p>
    )
}