import { FunctionComponent, useEffect, useState } from "react"
import Image from "next/image"
import { Coin } from "../models/coin"

export const BestCrypto: FunctionComponent = () => {
    const [handlerState, setHandler] = useState<Coin[]>([])

    useEffect(() => {
        fetch('/api/coinList')
            .then((res) => res.json())
            .then((data) => {
                setHandler(data as Coin[]);
                console.log("HELLO", data)
            })
    }, [])

    return (
        <div className="performance">
            {handlerState!.slice(0, 4)
                .map(({ id, name, current_price, price_change_percentage_24h, image }) =>
                    <ul id="performance-onclick" className="performance-layout" key={id} onClick={() => (sessionStorage.setItem('coinId', id), window.location.href = '/coinInfo')}>
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