import { useState, FunctionComponent, useContext } from 'react'
import Image from 'next/image';
import { Coin } from '../utils/coin';
import { useRouter } from 'next/router';
import { CoinContext } from '../context/coinContext';

export const SearchBar: FunctionComponent = ({}) => {
    const [searchId, setSearch] = useState({});

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const setCoinId = ((id:string) => {
        if (id.length > 0){
            sessionStorage.setItem("coinId", id);
            location.href = '/coinInfo';
        }
        else {
            alert("Saisissez une cryptomonnaie");
        }
    })

        


    return (
        <div>
            <div className='search-section'>
                <div className="input-search">
                    <input type="text" id="search" name="search" onChange={updateSearch} placeholder="Rechercher" />
                </div>
                <div className="button-search">
                    <button onClick={() => setCoinId(searchId)}><Image src={"/search-icon.png"} width={"32px"} height={"32px"} /></button>
                </div>
            </div>
        </div>
    )


}
