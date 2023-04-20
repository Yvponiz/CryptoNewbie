import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { Coin } from "../models/coin";
import quickSort from "../utils/quickSort";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const CryptoList: FunctionComponent<{ coins: Coin[] }> = ({ coins }) => {
    const [coinState, setCoinState] = useState<Coin[]>(coins);
    const { t } = useTranslation();

    const sort = (async (e) => {
        let newList = await quickSort(coinState, e.target.id)
        setCoinState(newList)
    })

    const setSelection = ((id, name) => {
        sessionStorage.setItem("coinId", id);
        sessionStorage.setItem("coinName", name);
    })

    if (!Array.isArray(coins)) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul className='titles-list'>
                <li onClick={sort} id="name" className="title-elem">{t('crypto.coin')}</li>
                <li onClick={sort} id="current_price" className="title-elem">{t('crypto.price')}</li>
                <li onClick={sort} id="market_cap" className="title-elem">{t('crypto.market')}</li>
                <li onClick={sort} id="24h_growth" className="title-elem">{t('crypto.twentyfour')}</li>
            </ul>

            <div>{coins?.slice(0, 25)
                .map(({ id, name, current_price, market_cap, price_change_percentage_24h, image }) =>
                    <Link href='/coinInfo' onClick={(() => setSelection(id, name))} className='index-coin' key={id}>
                        <span>
                            <Image
                                src={typeof image !== 'string' ? image.small : image}
                                width={50}
                                height={50}
                                alt='coin image'
                            >
                            </Image>
                            {name}
                        </span>
                        <p>{`${current_price.toLocaleString()} $`}</p>
                        <p>{`${market_cap.toLocaleString()} $`}</p>
                        <p style={{ color: Math.sign(price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                            {`${price_change_percentage_24h.toFixed(2)} %`}</p>
                    </Link>
                )
            }</div>
        </div>

    )
}