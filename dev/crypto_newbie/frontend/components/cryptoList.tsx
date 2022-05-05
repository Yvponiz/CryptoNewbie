import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Coin } from "../utils/coin";
import handler from "../../pages/api/worstCrypto";
import quickSort from "../utils/quickSort";
import session from "next-session";

export default function CryptoList() {
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

    const setSelection = ( async (e) => {
        let selectCoin = e.target.id;
        await window.sessionStorage.setItem("selectCoin", selectCoin);
        location.href = 'coinInfo';
    })
   

    return (
        <div>
            <div className='titles-list'>
                <p onClick={sort} className="title-elem" id="rank">#</p>
                <p onClick={sort} className="title-elem" id="logo">Logo</p>
                <p onClick={sort} className="title-elem" id="name">Nom</p>
                <p onClick={sort} className="title-elem" id="symbol">Symbole</p>
                <p onClick={sort} className="title-elem" id="current_price">Prix</p>
                <p onClick={sort} className="title-elem" id="market_cap">cap. boursière</p>
                <p onClick={sort} className="title-elem" id="croissance_24h">24 heures</p>
            </div>
        
            <div id="listCrypto">{handlerState.slice(0, 25)
                .map(({ id, name, symbol, market_data: { current_price, market_cap, market_cap_rank, price_change_percentage_24h }, image: { small }}) =>
                    <div onClick={setSelection} className='index-coin' key={id} id={name}>
                            <li id={name}>{market_cap_rank}</li>
                            <li id={name}><Image src={small} width="30px" height="30px" alt='coin image'></Image></li>
                            <li id={name} className="name">{name}</li>
                            <li id={name} className="symbol">{symbol}</li>
                            <li id={name}>{`${current_price.cad.toLocaleString()} $`}</li>
                            <li id={name}>{`${market_cap.cad.toLocaleString()} $`}</li>
                            <li id={name} style={{ color: Math.sign(price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                                {`${price_change_percentage_24h.toFixed(2)} %`}</li>
                        </div>     
                )
            }</div>
        </div>
        
    )
}