import { FunctionComponent, useEffect, useState } from "react"
import Image from "next/image"
import { Coin } from "../utils/coin"

export const TrendingCrypto: FunctionComponent = () => {
    const [handlerState, setHandler] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/trending')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data as Coin[])
            })
    }, [])

    return (
        <div className="performance">
            <span className="performance-title">Tendance</span>
            {handlerState.slice(0, 3)
            .map(({id, item:{name, price_btc, small}}) =>
                <div className="tendance-layout" key={id}>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{name}</li>
                            <li>Prix: {price_btc.toFixed(8) + ' $'}</li>
                            {/* <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}> {coin.market_data.price_change_percentage_24h.toFixed(2) + ' %'}</li> */}
                        </div>
                        <li><Image src={small} width="30px" height="30px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}

export const BestCrypto: FunctionComponent = () => {
    const [handlerState, setHandler] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/bestCrypto')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data as Coin[])
            })
    }, [])

    return (
        <div className="performance">
            <span className="performance-title">Meilleure performance</span>
            {handlerState.slice(0, 1)
            .map(({id, name,  market_data: { current_price, price_change_percentage_24h }, image: { small } }) =>
                <div className="performance-layout" key={id}>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{name}</li>
                            <li>Prix: {`${current_price.cad.toFixed(3)}$`}</li>
                            <li style={{ color: Math.sign(price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                                {price_change_percentage_24h + ' %'}</li>
                        </div>
                        <li><Image src={small} width="70px" height="70px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}

export const WorstCrypto: FunctionComponent = () => {
    const [handlerState, setHandler] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/worstCrypto')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data as Coin[])
            })
    }, [])

    return (
        <div className="performance">
            <span className="performance-title">Pire performance</span>
            {handlerState.slice(0, 1)
            .map(({id, name,  market_data: { current_price, price_change_percentage_24h }, image: { small } }) =>
                <div className="performance-layout" key={id}>
                    <div className="performance-layout-in">
                        <div className="performance-layout-left">
                            <li className="coin-name">{name}</li>
                            <li>Prix: {current_price.cad.toFixed(3) + ' $'}</li>
                            <li style={{ color: Math.sign(price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{price_change_percentage_24h + ' %'}</li>
                        </div>
                        <li><Image src={small} width="70px" height="70px" alt='coin image'></Image></li>
                    </div>
                </div>)}
        </div>
    )
}