import { useState, FunctionComponent } from 'react'
import Image from 'next/image';
import { Coin } from '../utils/coin';

type SearchBarProps = {
    isLoggedIn: boolean;
    onBuy: (coin:Coin) => void;
    defaultCoinId?: string;
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({ isLoggedIn, onBuy, defaultCoinId}) => {
    const [coinState, setCoin] = useState<Coin>();
    const [searchId, setSearch] = useState(defaultCoinId);
    const [isFirstRender, setRender] = useState(true);

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const coinGeckoFetch = () => {
        if (searchId != "") {
            fetch(`https://api.coingecko.com/api/v3/coins/${searchId.toLowerCase()}/`)
                .then((res) => res.json()
                .then((data) => {
                    if (data.error != "Could not find coin with the given id"){
                        setCoin(data as Coin);
                        setRender(false);
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
    
    if(defaultCoinId && isFirstRender){
        coinGeckoFetch()
    }

    const searchResult = coinState
        ? (
            <div className='search-result'>
                <li title="Le rang">{coinState.market_data.market_cap_rank}</li>
                <li title="Le nom">{coinState.name}</li>
                <li title="Le symbol">{coinState.symbol}</li>
                <li title="Le prix en cad">{coinState.market_data.current_price.cad.toLocaleString() + ' $'}</li>
                <li title="La capitalisation">{coinState.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
                <li title="L'évolution en 24h en %" style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coinState.market_data.price_change_percentage_24h + ' %'}</li>
                {isLoggedIn ? <button onClick={() => {onBuy(coinState)}}> Acheter</button> : null}
            </div>
        )
        : null


    return (
        <div>
            <div className='search-section'>
                <div className="input-search">
                    <input type="text" id="search" name="search" onChange={updateSearch} placeholder="Rechercher" />
                </div>
                <div className="button-search">
                    <button onClick={coinGeckoFetch}><Image src={"/search-icon.png"} width={"32px"} height={"32px"} /></button>
                </div>
                {searchResult}
            </div>
        </div>
    )

    /*
        const searchResult = (coinState) => {
        return (
            <div className='search-result'>
                <li title="Le rang">{coinState.market_data.market_cap_rank}</li>
                <li title="Le nom">{coinState.name}</li>
                <li title="Le symbol">{coinState.symbol}</li>
                <li title="Le prix en cad">{coinState.market_data.current_price.cad.toLocaleString() + ' $'}</li>
                <li title="La capitalisation">{coinState.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
                <li title="L'évolution en 24h en %" style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coinState.market_data.price_change_percentage_24h + ' %'}</li>
                {isLoggedIn ? <button> Acheter</button> : null}
            </div>
        )
    }

    return (
        <div>
            <div className='search-section'>
                <div className="input-search">
                    <input type="text" id="search" name="search" onChange={updateSearch} placeholder="Rechercher" />
                </div>
                <div className="button-search">
                    <button onClick={coinGeckoFetch}><Image src={"/search-icon.png"} width={"32px"} height={"32px"} /></button>
                </div>
                {coinState ? searchResult() : null}
            </div>
        </div>
    )*/


}