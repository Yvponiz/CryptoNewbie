import { useState, useEffect } from 'react'
import { searchCrypto } from "../../pages/api/searchCrypto";
import Image from 'next/image';

export default function SearchBar() {

    const [handlerState, setHandler] = useState([])
    const searchAction = () => {
        let searchValue = (document.getElementById('search') as HTMLInputElement).value;
        if (searchValue === ""){
            alert("Veuillez spécifier votre recherche");
        }
        else{
            searchCrypto(searchValue);
            useEffect(() => { 
            fetch('/api/searchCrypto')
                .then((res) => res.json())
                .then((data) => {
            console.log(data)
            setHandler(data)
            })
        }, [])
        }
    };

    return (
        <div className="searchbar-section">
            <div className="searchbar">
                <input type="text" id="search" name="search" placeholder="Rechercher" />
            </div>
            <div className="button-search">
                <button onClick={searchAction}>Rechercher</button>
            </div>
            <div>{handlerState.map((coin) => <div className='coin' key={coin.id}> 
            <li>{coin.market_data.market_cap_rank}</li> 
            <li><Image src={coin.image.small} width="30px" height="30px" alt='coin image'></Image></li>
            <li>{coin.name}</li> 
            <li>{coin.symbol}</li> 
            <li>{coin.market_data.current_price.cad.toLocaleString()+' $'}</li> 
            <li>{coin.market_data.market_cap.cad.toLocaleString()+' $'}</li> 
            <li style={{color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green'}}>{coin.market_data.price_change_percentage_24h.toFixed(2)+' %'}</li> 
          </div>)}
          </div>
        </div>
    )
}