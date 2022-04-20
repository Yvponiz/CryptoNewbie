import { useEffect, useState } from "react"
import Image from "next/image"

export function TrendingCrypto() {
    const [handlerState, setHandler] = useState([])

    useEffect(() => { // Fetch les data coté client, empêche le data d'être constament fetch
        fetch('/api/trending')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data)
                window.addEventListener("load", () => {
                    setTimeout(setHandler, 5000)
                })
            })
    }, [])

    return (
        <div className="performance">
            <span className="performance-title">Tendance</span>
            {handlerState.slice(0, 3).map((coin) =>
                <div className="tendance-layout" key={coin.id}>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{coin.item.name}</li>
                            <li>Prix: {coin.item.price_btc.toFixed(8) + ' $'}</li>
                            {/* <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}> {coin.market_data.price_change_percentage_24h.toFixed(2) + ' %'}</li> */}
                        </div>
                        <li><Image src={coin.item.small} width="30px" height="30px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}

export function BestCrypto() {
    const [handlerState, setHandler] = useState([])

    useEffect(() => {
        fetch('/api/bestCrypto')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data)
            })
    }, [])

    return (
        <div className="performance">
            <span className="performance-title">Meilleure performance</span>
            {handlerState.slice(0, 1).map((coin) =>
                <div className="performance-layout" key={coin.id}>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{coin.name}</li>
                            <li>Prix: {coin.market_data.current_price.cad.toFixed(3) + ' $'}</li>
                            <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                                {coin.market_data.price_change_percentage_24h + ' %'}</li>
                            {/* <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                                 {Intl.NumberFormat('en-IN', {}).format(coin.market_data.price_change_percentage_24h) + ' %'}</li> */}
                        </div>
                        <li><Image src={coin.image.small} width="70px" height="70px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}

export function WorstCrypto() {
    const [handlerState, setHandler] = useState([])

    useEffect(() => {
        fetch('/api/worstCrypto')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data)
            })
    }, [])

    return (
        <div className="performance">
            <span className="performance-title">Pire performance</span>
            {handlerState.slice(0, 1).map((coin) =>
                <div className="performance-layout" key={coin.id}>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{coin.name}</li>
                            <li>Prix: {coin.market_data.current_price.cad.toFixed(3) + ' $'}</li>
                            <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coin.market_data.price_change_percentage_24h + ' %'}</li>
                        </div>
                        <li><Image src={coin.image.small} width="70px" height="70px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}