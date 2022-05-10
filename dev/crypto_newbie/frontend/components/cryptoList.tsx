import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { Coin } from "../utils/coin";
import quickSort from "../utils/quickSort";


export const CryptoList: FunctionComponent = () => {
    const [handlerState, setHandlerState] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/coinList') // Appelle la fonction exporté par défaut dans coinList
            .then((res) => res.json())
            .then((data) => setHandlerState(data as Coin[]))
    }, [])

    const sort = (async (e) => {
        let newList = await quickSort(handlerState, e.target.id)
        setHandlerState(newList)
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
                <p onClick={sort} className="title-elem" id="rank">#</p>
                <p onClick={sort} className="title-elem" id="logo">Logo</p>
                <p onClick={sort} className="title-elem" id="name">Nom</p>
                <p onClick={sort} className="title-elem" id="symbol">Symbole</p>
                <p onClick={sort} className="title-elem" id="current_price">Prix</p>
                <p onClick={sort} className="title-elem" id="market_cap">Market cap</p>
                <p onClick={sort} className="title-elem" id="croissance_24h">24 heures</p>
            </div>

            <div>{handlerState.slice(0, 25)
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