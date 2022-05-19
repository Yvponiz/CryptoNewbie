import { FunctionComponent, useEffect, useState } from "react";

type Crypto = {
    nameId: string,
    name: string,
    quantity: number
}

export const UserCoinList: FunctionComponent = ({ }) => {
    const [crypto, setCrypto] = useState<Crypto[]>([]);

    useEffect(() => {
        fetch('/api/getCryptos')
            .then((res) => res.json())
            .then((data) => {
                setCrypto(data.cryptos as Crypto[])
            })
    }, [])

    if (crypto) {

        return (
            <div>
                <div>{crypto.slice(0, 6).map(({ nameId, name, quantity }) =>
                    <ul className="form">
                        <li>{nameId}</li>
                        <li>{name}</li>
                        <li>Quantité: {quantity} </li>

                    </ul>
                )} </div>

            </div>
        )
    }
}