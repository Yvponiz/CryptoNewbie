import { useState, useEffect, FunctionComponent } from 'react'
import { Coin } from '../utils/coin';
import Image from 'next/image';

export const CryptoInfos: FunctionComponent = () => {
    const [coinState, setCoin] = useState<Coin>();
    
    useEffect(() => {
        let coinId = sessionStorage.getItem('coinId');
        //let chart = document.getElementById('chart').getContext


        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCoin(data as Coin);
            })
        fetch(`/api/coinHistory/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(new Date().getTime() - 3600);
                console.log(new Date('2021-05-12').getTime());
            })
    }, []);

    if(coinState){
        return (
            <div>
                <div className='header-infos'>
                    <li><Image src={coinState.image.large} width="100px" height="100px" alt='coin image'></Image></li>
                    <li id="name">{coinState.name} ({coinState.symbol})</li>
                    <li id='current-price'>{coinState.market_data.current_price.cad.toLocaleString()} $</li>
                    <li id='price-change' style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_24h.toFixed(2)} %`}</li>
                </div>
                <div className='chart-coin'>
                    <canvas id='chart'></canvas>
                </div>
                <div className='more-infos'>
                    <h1>Informations supplémentaires</h1>

                    <div className='more-infos-section'>
                        <li>Croisasnce en 24 heures</li>
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_24h.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>Croisasnce en 7 jours</li>
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_7d) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_7d.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>Croisasnce en 1 mois</li>   
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_30d) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_30d.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>Croisasnce en 1 an</li>
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_1y) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_1y.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>Plus haut prix en 24h</li>
                        <li>{coinState.market_data.high_24h.cad.toLocaleString()} $ ↑</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>Plus bas prix en 24h</li>
                        <li>{coinState.market_data.low_24h.cad.toLocaleString()} $ ↓</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>Capitalisation de marché</li>
                        <li>{coinState.market_data.market_cap.cad.toLocaleString()} $</li>
                    </div>
                </div>

            </div>
        )
    }

    return (
        null
    )
}