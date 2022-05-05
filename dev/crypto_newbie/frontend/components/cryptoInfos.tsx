import Image from 'next/image';
import { useState, useEffect} from 'react'


export default function CryptoInfos() {
    const [handlerState, setHandler] = useState({market_data:{current_price:{cad: ""}, market_cap_rank:"", market_cap:{cad: ""}, price_change_percentage_24h: ""}});
    const [coinState, setCoin] = useState("");

    let coin;

    const coingeckoUrl = (coin) => {
        coin = String(coin); 
        return `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/`;
      };

    useEffect(() => {
        coin = sessionStorage.getItem('selectCoin');
        console.log(coin);
        setCoin(coin);
    }, []);

    const callApi=(() =>{

    })

    fetch('https://api.coingecko.com/api/v3/coins/'+coinState).then((response) => {
        response.json().then((jsonData) => {
            setHandler(jsonData);
            console.log(handlerState);
        })
    })
        
    console.log(coinState);

    
    return(
        <p>Infos prochainement...</p>
    )
}
