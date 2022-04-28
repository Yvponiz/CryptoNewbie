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

    //arr = handlerState.sort(function(a, b) {return a.market_data.current_price.cad - b.market_data.current_price.cad})
    //const filterByName = () => {
      //  handlerState.sort(function(a,b) {return a.name.localeCompare(b.name)})
     //   arr = handlerState.sort(function(a,b) {return a.name.localeCompare(b.name)}) //pour comparer les noms
     //   console.log("bonjour")
        console.log(handlerState)
    //}

    const filterByName = (async () => {
        //ces trois lignes doivent être conservé pour faire des tests
        //setHandlerState(handlerState.slice(0,25).sort(function(a,b) {return a.name.localeCompare(b.name)}))
        //console.log(handlerState)
        //document.getElementById('listCrypto').remove
        let newList = await quickSort(handlerState, "name")
        setHandlerState(newList)
        console.log("bonsoir")
    })
   

    return (
        <div>
            <div className='titles-list'>
                <p id="rang">#</p>
                <p id="logo">Logo</p>
                <p onClick={filterByName} id="nom">Nom</p>
                <p id="symbol">Symbole</p>
                <p id="prix">Prix</p>
                <p id="marketCap">Market cap</p>
                <p>24 heures</p>
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