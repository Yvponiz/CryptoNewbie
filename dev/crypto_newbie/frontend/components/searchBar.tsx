import { useState, useEffect} from 'react'
import Image from 'next/image';
import handler from '../../pages/api/bestCrypto';

export default function SearchBar() {
    const [handlerState, setHandler] = useState({market_data:{current_price:{cad: ""}, market_cap_rank:"", market_cap:{cad: ""}, price_change_percentage_24h: ""}});
    const [search, setSearch] = useState("");
    

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const coingeckoUrl = (coin) => {
        coin = String(coin); 
        return `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/`;
      };

    const coingeckoFetch = () => {
        fetch(coingeckoUrl(search)).then((response) =>
            response.json().then((jsonData) => {
                setHandler(jsonData);
            })
        );
    };

    return (
        <div>
            <div className='search-section'>
                <div className="input-search">
                    <input type="text" id="search" name="search" onChange={updateSearch} placeholder="Rechercher" />
                </div>
                <div className="button-search">
                    <button onClick={coingeckoFetch}>Rechercher</button>
                </div>
            </div>
            <div className='search-result'>
                <li>{handlerState.market_data.market_cap_rank}</li>
                <li>{handlerState.name}</li>
                <li>{handlerState.symbol}</li>
                <li>{handlerState.market_data.current_price.cad.toLocaleString() + ' $'}</li>
                <li>{handlerState.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
                <li style={{ color: Math.sign(handlerState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{handlerState.market_data.price_change_percentage_24h + ' %'}</li>
            </div>
        </div>
    )
}
