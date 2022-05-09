import { useState, useEffect, FunctionComponent } from 'react'
import Image from 'next/image';
import { Coin } from '../utils/coin';

export const SearchBar: FunctionComponent = () => {
    const [coinState, setCoin] = useState<Coin>()
    const [search, setSearch] = useState("");

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const coingeckoUrl = (coin) => {
        coin = String(coin);
        return `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/`;
    };

    const coingeckoFetch = () => {
        if (search != "") {
            fetch(coingeckoUrl(search))
                .then((res) => res.json()
                    .then((data) => {
                        if (data.error != "Could not find coin with the given id") {
                            setCoin(data as Coin)
                            let divResult = document.querySelector<HTMLElement>(".search-result") ;
                            divResult.style.visibility = "visible";
                        }
                        else {
                            alert("La recherche n'est pas valide !");
                        }
                    })
                );
        }
        else {
            alert("Veuillez spécifier une crypto");
        }
    };

    if (coinState) {
        return (
            <div>
                <div className='search-section'>
                    <div className="input-search">
                        <input type="text" id="search" name="search" onChange={updateSearch} placeholder="Rechercher" />
                    </div>
                    <div className="button-search">
                        <button className='search-button' onClick={coingeckoFetch}><Image src={"/search-icon.png"} width={"32px"} height={"32px"} /></button>
                    </div>
                </div>
                <div className='search-result'>
                    <li title="Le rang">{coinState.market_data.market_cap_rank}</li>
                    <li title="Le nom">{coinState.name}</li>
                    <li title="Le symbol">{coinState.symbol}</li>
                    <li title="Le prix en cad">{coinState.market_data.current_price.cad.toLocaleString() + ' $'}</li>
                    <li title="La capitalisation">{coinState.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
                    <li title="L'évolution en 24h en %" style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coinState.market_data.price_change_percentage_24h + ' %'}</li>
                    <button className='button-buy'>Acheter</button>
                </div>
            </div>
        )
    }
    return (
        <div className='search-section'>
            <div className="input-search">
                <input type="text" id="search" name="search" onChange={updateSearch} placeholder="Rechercher" />
            </div>
            <div className="button-search">
                <button className='search-button' onClick={coingeckoFetch}><Image src={"/search-icon.png"} width={"32px"} height={"32px"} /></button>
            </div>
        </div>
    )
}