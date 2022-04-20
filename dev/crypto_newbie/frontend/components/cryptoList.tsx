import { useEffect, useState } from "react"
import Image from "next/image"

export function CryptoList() {
    const [handlerState, setHandler] = useState([])
    //const [pingState, setPing] = useState("Ping?"); //[données du state | par défaut "Ping?", fonction utilisée pour mettre à jour valeur]

    useEffect(() => { // Fetch les data coté client, empêche le data d'être constament fetch
        fetch('/api/coinList') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data)
            })
    }, [])

    return (
        <div>
            <div className='titles-list'>
                <p>#</p>
                <p>Logo</p>
                <p>Nom</p>
                <p>Symbole</p>
                <p>Prix</p>
                <p>Market cap</p>
                <p>24 heures</p>
            </div>

            <div>{handlerState.slice(0, 25).map((coin) =>
                <a href='' className='index-coin' key={coin.id}>
                    <li>{coin.market_data.market_cap_rank}</li>
                    <li><Image src={coin.image.small} width="30px" height="30px" alt='coin image'></Image></li>
                    <li>{coin.name}</li>
                    <li>{coin.symbol}</li>
                    <li>{coin.market_data.current_price.cad.toLocaleString() + ' $'}</li>
                    <li>{coin.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
                    <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                        {coin.market_data.price_change_percentage_24h.toFixed(2) + ' %'}</li>
                </a>)
            }</div>
        </div>
    )
}