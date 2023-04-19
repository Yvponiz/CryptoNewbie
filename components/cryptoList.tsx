import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { Coin } from "../models/coin";
import quickSort from "../utils/quickSort";

export const CryptoList: FunctionComponent = () => {
    const [coinState, setCoinState] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/coinList')
            .then((res) => res.json())
            .then((data) => {setCoinState(data as Coin[]), console.log(data)})
            
    }, [])

    const sort = (async (e) => {
        let newList = await quickSort(coinState, e.target.id)
        setCoinState(newList)
    })

    const setSelection = ((id, name) => {
        sessionStorage.setItem("coinId", id);
        sessionStorage.setItem("coinName", name);
        location.href = 'coinInfo';
    })

    return (
        <div>
            <ul className='titles-list'>
                <li onClick={sort} id="name" className="title-elem">Nom</li>
                <li onClick={sort} id="current_price" className="title-elem">Prix</li>
                <li onClick={sort} id="market_cap" className="title-elem">Market cap</li>
                <li onClick={sort} id="24h_growth" className="title-elem">24 heures</li>
            </ul>

            <div>{coinState?.slice(0, 25)
                .map(({ id, name, current_price, market_cap, price_change_percentage_24h , image }) =>
                    <a onClick={(() => setSelection(id, name))} className='index-coin' key={id}>
                        <span>
                            <Image
                                src={typeof image !== 'string' ? image.small : image}
                                width={50}
                                height={50}
                                alt='coin image'
                            >
                            </Image>
                            {name}
                        </span>
                        <p>{`${current_price.toLocaleString()} $`}</p>
                        <p>{`${market_cap.toLocaleString()} $`}</p>
                        <p style={{ color: Math.sign(price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                            {`${price_change_percentage_24h.toFixed(2)} %`}</p>
                    </a>
                )
            }</div>
        </div>

    )
}