import { useState, useEffect} from 'react'
import searchCrypto from '../../pages/api/searchCrypto';
import Image from 'next/image';
import handler from '../../pages/api/bestCrypto';



//function searchFunction(event: FormEvent, state){
//}

export default function SearchBar() {
    const [handlerState, setHandler] = useState({id:"", name:"", market_data:{current_price:{cad:""}}})

    useEffect(() => { 
        fetch('/api/searchCrypto') 
        .then((res) => res.json())
        .then((data) => {
        console.log(data)
        setHandler(data)
        })
    }, [])


    return (
        <div>
        <form className='searchbar-section' action='/index'>
            <div className="searchbar">
                <input type="text" id="search" name="search" placeholder="Rechercher" />
            </div>
            <div className="button-search">
                <button type="submit">Rechercher</button>
            </div>
        </form>

        <div>
            <li>{handlerState.name}</li>
            <li>{handlerState.symbol}</li>
            <li>{handlerState.market_data.current_price.cad}</li>
        </div>
        </div>
    )
}
