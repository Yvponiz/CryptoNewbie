import Image from 'next/image';
import { useState, useEffect} from 'react'


export default function CryptoInfos() {
    const [handlerState, setHandler] = useState({market_data:{current_price:{cad: ""}, market_cap_rank:"", market_cap:{cad: ""}, price_change_percentage_24h: ""}});
    const [coinState, setCoin] = useState("");

    let coin;
    useEffect(() => {
        if (window.sessionStorage.getItem('selectCoin')) {
            coin = sessionStorage.getItem('selectCoin');
            console.log(coin);
            setCoin(coin);
        }
    }, []);
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
