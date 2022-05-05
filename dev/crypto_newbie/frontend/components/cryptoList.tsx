import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { Coin } from "../utils/coin";
import quickSort from "../utils/quickSort";


export const CryptoList: FunctionComponent = () => {
    const [handlerState, setHandlerState] = useState<Coin[]>([])
    useEffect(() => { // Fetch les data coté client
        fetch('/api/coinList') // Appelle la fonction exporté par défaut dans coinList
        .then((res) => res.json())
        .then((data) => setHandlerState(data as Coin[]))
    }, [])

    const sort = (async (e) => {
        let newList = await quickSort(handlerState, e.target.id)
        setHandlerState(newList)
    })
    
    const setSelection = ( async (e) => {
        let selectCoin = e.currentTarget.id;
        let response = await window.sessionStorage.setItem("selectCoin", selectCoin);
        location.href = 'coinInfo';
        console.log(response);
    })

    return (
        <div>
            <div className='titles-list'>
                <p onClick={sort} className="title-elem">#</p>
                <p onClick={sort} className="title-elem">Logo</p>
                <p onClick={sort} className="title-elem">Nom</p>
                <p onClick={sort} className="title-elem">Symbole</p>
                <p onClick={sort} className="title-elem">Prix</p>
                <p onClick={sort} className="title-elem">Market cap</p>
                <p onClick={sort} className="title-elem">24 heures</p>
            </div>

            <div>{handlerState.slice(0, 25)
                .map(({ id, name, symbol, market_data: { current_price, market_cap, market_cap_rank, price_change_percentage_24h }, image: { small } }) =>
                    <a onClick={((e) => setSelection(e))} className='index-coin' key={id} id={name}>
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