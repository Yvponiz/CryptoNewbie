import { useEffect, useState } from "react"
import Image from "next/image"
import handler from "../../pages/api/bestCrypto"

export function BestCrypto() {
    const [handlerState, setHandler] = useState([])
    
    useEffect(() => { // Fetch les data coté client, empêche le data d'être constament fetch
        fetch('/api/bestCrypto') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data)
            })
    }, [])

    return (
        <div className="performance">
            {handlerState.slice(0,1).map((coin) =>
                <div className="performance-layout" key={coin.id}>
                    <span className="performance-title">Meilleure performance</span>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{coin.name}</li>
                            <li>Prix: {coin.market_data.current_price.cad.toFixed(3) + ' $'}</li>
                            <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}> {coin.market_data.price_change_percentage_24h.toFixed(2) + ' %'}</li>
                        </div>
                        <li><Image src={coin.image.small} width="70px" height="70px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}

export function WorstCrypto() {
    const [handlerState, setHandler] = useState([])
    
    useEffect(() => { // Fetch les data coté client, empêche le data d'être constament fetch
        fetch('/api/worstCrypto') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data)
            })
    }, [])

    return (
        <div className="performance">
            {handlerState.slice(0,1).map((coin) =>
                <div className="performance-layout" key={coin.id}>
                    <span className="performance-title">Pire performance</span>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{coin.name}</li>
                            <li>Prix: {coin.market_data.current_price.cad.toFixed(3) + ' $'}</li>
                            <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coin.market_data.price_change_percentage_24h.toFixed(2) + ' %'}</li>
                        </div>
                        <li><Image src={coin.image.small} width="70px" height="70px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}