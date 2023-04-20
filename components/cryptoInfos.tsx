import { useState, useEffect, FunctionComponent } from 'react'
import { Coin } from '../models/coin';
import Image from 'next/image';
import { SearchProps } from './searchBar';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const CryptoInfos: FunctionComponent<SearchProps> = ({ isLoggedIn, onBuy }) => {
    const [coinState, setCoin] = useState<Coin>();
    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        const { coinId } = router.query;

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error != "coin not found") {
                    setCoin(data as Coin);
                }
            });
    }, [router.query]);

    if (coinState) {

        return (
            <div>
                <div className='header-infos'>
                    <li><Image
                        src={typeof coinState.image !== 'string' ? coinState.image.large : coinState.image}
                        width={100} height={100} alt='coin image'>
                    </Image></li>
                    <li id="name">{coinState.name} ({coinState.symbol})</li>
                    <li id='current-price'>{coinState.market_data.current_price.cad.toLocaleString()} $</li>
                    <li id='price-change' style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                        {`${coinState.market_data.price_change_percentage_24h.toFixed(2)} %`}</li>
                </div>
                <div className='more-infos'>
                    <h1>{t('crypto.info')}</h1>

                    <div className='more-infos-section'>
                        <li>{`${t('crypto.growth')} ${t('crypto.hours')}`}</li>
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_24h.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>{`${t('crypto.growth')} ${t('crypto.days')}`}</li>
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_7d) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_7d.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>{`${t('crypto.growth')} ${t('crypto.month')}`}s</li>
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_30d) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_30d.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>{`${t('crypto.growth')} ${t('crypto.year')}`}</li>
                        <li style={{ color: Math.sign(coinState.market_data.price_change_percentage_1y) === -1 ? 'red' : 'green' }}>
                            {`${coinState.market_data.price_change_percentage_1y.toFixed(2)} %`}</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>{t('crypto.highest')}</li>
                        <li>{coinState.market_data.high_24h.cad.toLocaleString()} $ ↑</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>{t('crypto.lowest')}</li>
                        <li>{coinState.market_data.low_24h.cad.toLocaleString()} $ ↓</li>
                    </div>
                    <div className='more-infos-section'>
                        <li>{t('crypto.market')}</li>
                        <li>{coinState.market_data.market_cap.cad.toLocaleString()} $</li>
                    </div>
                    <div className='coin-infos'>
                        {isLoggedIn ? <button className='button-buy' onClick={() => { onBuy(coinState) }}> {t('transaction.buy')}</button> : null}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='header-infos'>
            <li id="name">Aucune cryptomonnaie trouvée pour cette saisie</li>
            <li id="name">{`:-(`}</li>
        </div>
    )
}