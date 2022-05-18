import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { Coin } from "../utils/coin";
import quickSort from "../utils/quickSort";

export const CryptoList: FunctionComponent = () => {
    const [coinState, setCoinState] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/coinList') // Appelle la fonction exporté par défaut dans coinList
            .then((res) => res.json())
            .then((data) => setCoinState(data as Coin[]))
    }, [])

    const sort = (async (e) => {
        let newList = await quickSort(coinState, e.target.id)
        setCoinState(newList)
    })

    const setSelection = ((id, name) => {
        sessionStorage.setItem("coinId", id);
        sessionStorage.setItem("coinName", name);
        location.href = 'coinInfo';
        console.log("CoinId: ", id, "CoinName: ", name);
    })

    return (
        <div>
            <div className='titles-list'>
                <p onClick={sort} id="rank" className="title-elem">#</p>
                <p onClick={sort} id="logo" className="title-elem">Logo</p>
                <p onClick={sort} id="name" className="title-elem">Nom</p>
                <p onClick={sort} id="symbol" className="title-elem">Symbole</p>
                <p onClick={sort} id="current_price" className="title-elem">Prix</p>
                <p onClick={sort} id="market_cap" className="title-elem">Market cap</p>
                <p onClick={sort} id="24h_growth" className="title-elem">24 heures</p>
            </div>

            <div>{coinState.slice(0, 25)
                .map(({ id, name, symbol, market_data: { current_price, market_cap, market_cap_rank, price_change_percentage_24h }, image: { small } }) =>
                    <a onClick={(() => setSelection(id, name))} className='index-coin' key={id}>
                        <li>{market_cap_rank}</li>
                        <li><Image src={small} width="30px" height="30px" alt='coin image'></Image></li>
                        <li>{name}</li>
                        <li>{symbol}</li>
                        <li>{`${current_price.cad.toLocaleString()} $`}</li>
                        <li>{`${market_cap.cad.toLocaleString()} $`}</li>
                        <li style={{ color: Math.sign(price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                            {`${price_change_percentage_24h.toFixed(2)} %`}</li>
                    </a>
                )
            }</div>
        </div>

    )
}