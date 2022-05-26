import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Coin } from '../utils/coin';

export type SearchProps = {
    isLoggedIn: boolean;
    onBuy?: (coin: Coin) => void;
    defaultCoinId?: string;
    onSearch: (coinId: string) => void;
}

export const SearchBar: FunctionComponent = ({}) => {
    return (
        <div>
            <form className='search-section' action="/coinInfo" method='post'>
                <div className="input-search">
                    <input type="text" id="search" name="search" onChange={(event) => sessionStorage.setItem('coinId', event.target.value)} placeholder="Rechercher" required />
                </div>
                <div className="button-search">
                    <button type='submit'><Image src={"/search-icon.png"} width={"32px"} height={"32px"} /></button>
                </div>
            </form>
        </div>
    )
}