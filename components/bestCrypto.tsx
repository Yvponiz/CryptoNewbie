import { FunctionComponent } from "react"
import Image from "next/image"
import { Coin } from "../models/coin"
import { useRouter } from 'next/router';


export const BestCrypto: FunctionComponent<{ coins: Coin[] }> = ({ coins }) => {
    const router = useRouter();
    if (!Array.isArray(coins)) {
        return <div>Loading...</div>;
    }
    
    const setSelection = (id) => {
        router.push({
            pathname: "/coinInfo",
            query: { coinId: id }
        });
    };


    return (
        <div className="performance">
            {coins?.slice(0, 4)
                .map(({ id, name, current_price, price_change_percentage_24h, image }) =>
                    <ul id="performance-onclick" className="performance-layout" key={id} onClick={() => setSelection(id)}>
                        <li>
                            <Image
                                src={typeof image !== 'string' ? image.small : image}
                                width={100}
                                height={100}
                                alt='coin image'
                            ></Image>
                        </li>
                        <li className="coin-name">
                            {name}
                            <p style={{ color: Math.sign(price_change_percentage_24h) === -1 ? 'red' : 'green' }}>
                                {price_change_percentage_24h.toPrecision(3) + ' %'}
                            </p>
                        </li>
                        <li>{`${current_price} $`}</li>
                    </ul>)}
        </div>
    )
}