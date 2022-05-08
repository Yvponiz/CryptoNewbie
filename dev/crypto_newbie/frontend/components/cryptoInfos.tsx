import { useState, useEffect, FunctionComponent } from 'react'
import { Coin } from '../utils/coin';
import Image from 'next/image';

export const CryptoInfos: FunctionComponent = () => {
    const [coinState, setCoin] = useState<Coin>();

    useEffect(() => {
        let coinId = sessionStorage.getItem('coinId');

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then((response) => response.json())
            .then((data) => {
                setCoin(data as Coin);
            })
    }, []);

    if(coinState){
        return (
            <div>
                {coinState.name}
                <li><Image src={coinState.image.large} width="100px" height="100px" alt='coin image'></Image></li>
            </div>
        )
    }

    return (
        <></>
    )
}