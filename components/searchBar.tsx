import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Coin } from '../models/coin';
import { useTranslation } from 'react-i18next';

export type SearchProps = {
    isLoggedIn: boolean;
    onBuy?: (coin: Coin) => void;
    defaultCoinId?: string;
    onSearch: (coinId: string) => void;
}

export const SearchBar: FunctionComponent = ({ }) => {
    const { t } = useTranslation();
    return (
        <div>
            <form className='search-section' action="/coinInfo" method='post'>
                <div className="input-search">
                    <input type="text" id="search" name="search" onChange={(event) => sessionStorage.setItem('coinId', event.target.value)} placeholder={t('search')} required />
                </div>
                <div className="button-search">
                    <button type='submit'><Image src={"/search-icon.png"} width={32} height={32} alt='search-icon' /></button>
                </div>
            </form>
        </div>
    )
}