//import { setCoin } from "../../pages/api/searchCrypto"
import { useState, useEffect} from 'react'

export default function SearchBar() {
    //const [handlerState, setHandler] = useState({id:"", name:"", market_data:{current_price:{cad:""}}})
    const [search, setSearch] = useState({});

    const coingeckoUrl = (coin) => {
        coin = String(coin);
        return `https://api.coingecko.com/api/v3/coins/${coin}?/`;
      };

    const coingeckoFetch = async (coin) => {
        fetch(coingeckoUrl(coin)).then((response) =>
          response.json().then((jsonData) => {
            setSearch(jsonData);
            console.log("holla!");
            console.log(jsonData);
           })
        );
    };
/*
    useEffect(() => { 
        fetch('/api/searchCrypto') 
        .then((res) => res.json())
        .then((data) => {
        console.log(data)
        setHandler(data)
        })
    }, [])
    */

    return (
        <div>
            <form className="search" method="POST">
                <div className="searchbar">
                    <input type="text" id="search" name="search" onChange={(e) => coingeckoFetch(e.target.value)} placeholder="Rechercher" />
                </div>
                <div className="button-search">
                    <button type="submit">Rechercher</button>
                </div>
            </form>
            <h3>{search.symbol}</h3>
        </div>
        
    )
}
