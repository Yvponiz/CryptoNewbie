import { useState, FunctionComponent, useContext } from 'react'
import Image from 'next/image';
import { Coin } from '../utils/coin';
import { useRouter } from 'next/router';
import { CoinContext } from '../context/coinContext';

export type SearchProps = {
    isLoggedIn: boolean;
    onBuy?: (coin: Coin) => void;
    defaultCoinId?: string;
    onSearch: (coinId: string) => void;
}

export const SearchBar: FunctionComponent<SearchProps> = ({ isLoggedIn, onBuy, defaultCoinId, onSearch }) => {
    const coinState = useContext(CoinContext)
    const [searchId, setSearch] = useState(defaultCoinId);

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const searchResult = coinState
        ? (
            <div className='search-result'>
                <Image src={coinState.image.small} width="30px" height="30px" alt='coin image'></Image>
                <li title="Le rang">{coinState.market_data.market_cap_rank}</li>
                <li title="Le nom">{coinState.name}</li>
                <li title="Le symbol">{coinState.symbol}</li>
                {coinState.market_data.current_price.cad
                    ?
                    <li title="Le prix en cad">{coinState.market_data.current_price.cad.toLocaleString() + ' $'}</li>
                    : null}
                {coinState.market_data.market_cap.cad
                    ?
                    <li title="La capitalisation">{coinState.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
                    : null}
                <li title="L'évolution en 24h en %" style={{ color: Math.sign(coinState.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coinState.market_data.price_change_percentage_24h + ' %'}</li>
                {isLoggedIn ? <button onClick={() => { onBuy(coinState) }}> Acheter</button> : null}
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
                    <button onClick={() => { onSearch(searchId) }}><Image src={"/search-icon.png"} width={"32px"} height={"32px"} /></button>
                </div>
                {searchResult}
            </div>
        </div>
    )


}