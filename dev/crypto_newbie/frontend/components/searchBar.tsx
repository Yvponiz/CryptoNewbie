import { useState, useEffect, FormEvent} from 'react'
import searchCrypto from '../../pages/api/searchCrypto';
import Image from 'next/image';
import handler from '../../pages/api/bestCrypto';

const [handlerState, setHandler] = useState([])
const [search, setSearch] = useState('');
const handleChange = e => {
    setSearch(e.target.value);
};

export function SearchFunction(event: FormEvent, state){
    useEffect(() => { 
        fetch('/api/searchCrypto') 
        .then((res) => res.json())
        .then((data) => {
        console.log(data)
        setHandler(data)
        })
    }, [])
}

export default function SearchBar() {
    return (
        <div>
        <form className='searchbar-section' action='/index'>
            <div className="searchbar">
                <input type="text" id="search" name="search" onChange={handleChange} placeholder="Rechercher" />
            </div>
            <div className="button-search">
                <button type="submit">Rechercher</button>
            </div>
        </form>

        <div>{handlerState.slice(0, 1).map((coin) =>
            <div className='coin' key={coin.id}>
            <li>{coin.market_data.market_cap_rank}</li>
            <li><Image src={coin.image.small} width="30px" height="30px" alt='coin image'></Image></li>
            <li>{coin.name}</li>
            <li>{coin.symbol}</li>
            <li>{coin.market_data.current_price.cad.toLocaleString() + ' $'}</li>
            <li>{coin.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
            <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coin.market_data.price_change_percentage_24h.toFixed(2) + ' %'}</li>
        </div>)
    }</div>
    </div>
    )
}
