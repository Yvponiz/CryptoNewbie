import { useState, useEffect, FunctionComponent } from 'react'
import { Coin } from '../utils/coin';
import Image from 'next/image';
import { SearchProps } from './searchBar';

export const CryptoInfos: FunctionComponent<SearchProps> = ({isLoggedIn, onBuy}) => {
    const [coinState, setCoin] = useState<Coin>();

    useEffect(() => {
        const coinId = sessionStorage.getItem('coinId');
        console.log(coinId);
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then((response) =>response.json())
            .then((data) => {
                if(data.error != "Could not find coin with the given id"){
                    console.log(data.error);
                    setCoin(data as Coin);
                }
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
                    <div className='coin-infos'>
                        {isLoggedIn ? <button className='button-buy' onClick={() => {onBuy(coinState)}}> Acheter</button> : null}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='header-infos'>
            <li id="name">Aucune cryptomonnaie trouvée pour cette saisie</li>
            <li id="name"> :-(</li>
        </div>
    )
}