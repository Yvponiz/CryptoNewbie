import { useEffect, useState } from "react";
import Image from "next/image";
import { Coin } from "../utils/coin";
import handler from "../../pages/api/worstCrypto";
import quickSort from "../utils/quickSort";

export default function CryptoList() {
    const [handlerState, setHandlerState] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/coinList') // Appelle la fonction exporté par défaut dans coinList
            .then((res) => res.json())
            .then((data) => setHandlerState(data as Coin[]))
    }, [])

    const sort = (async (e) => {
        //document.getElementById('listCrypto').remove
        let newList = await quickSort(handlerState, e.target.id)
        setHandlerState(newList)
    })
   

    return (
        <div>
            <div className='titles-list'>
                <p onClick={sort} id="rank">#</p>
                <p onClick={sort} id="logo">Logo</p>
                <p onClick={sort} id="name">Nom</p>
                <p onClick={sort} id="symbol">Symbole</p>
                <p onClick={sort} id="current_price">Prix</p>
                <p onClick={sort} id="market_cap">cap. boursière</p>
                <p onClick={sort} id="croissance_24h">24 heures</p>
            </div>

            <div id="listCrypto">{handlerState.slice(0, 25)
                .map(({ id, name, symbol, market_data: { current_price, market_cap, market_cap_rank, price_change_percentage_24h }, image: { small }}) =>
                    <a href='' className='index-coin' key={id}>
                        <li>{market_cap_rank}</li>
                        <li><Image src={small} width="30px" height="30px" alt='coin image'></Image></li>
                        <li className="name">{name}</li>
                        <li className="symbol">{symbol}</li>
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