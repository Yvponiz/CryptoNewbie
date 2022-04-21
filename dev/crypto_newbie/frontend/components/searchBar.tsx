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
        if (search != ""){
            fetch(coingeckoUrl(search)).then((response) =>
                response.json().then((jsonData) => {
                    if (jsonData.error != "Could not find coin with the given id"){
                        setHandler(jsonData);
                        let divResult = document.querySelector(".search-result");
                        divResult.style.visibility = "visible";
                    }
                    else{
                        alert("La recherche n'est pas valide !");
                    }
                })
            );
        }
        else {
            alert("Veuillez spécifier une crypto");
        }
    };

    return (
        <div>
            <div className='search-section'>
                <div className="input-search">
                    <input type="text" id="search" name="search" onChange={updateSearch} placeholder="Rechercher" />
                </div>
                <div className="button-search">
                    <button onClick={coingeckoFetch}><Image src={"/search-icon.png"} width={"32px"} height={"32px"}/></button>
                </div>
            </div>
            <div className='search-result'>
                <li title="Le rang">{handlerState.market_data.market_cap_rank}</li>
                <li title="Le nom">{handlerState.name}</li>
                <li title="Le symbol">{handlerState.symbol}</li>
                <li title="Le prix en cad">{handlerState.market_data.current_price.cad.toLocaleString() + ' $'}</li>
                <li title="La capitalisation">{handlerState.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
                <li title="L'évolution en 24h en %" style={{ color: Math.sign(handlerState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{handlerState.market_data.price_change_percentage_24h + ' %'}</li>
            </div>
        </div>
    )
}