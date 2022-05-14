import { FunctionComponent, useEffect, useState } from "react";
import { Coin } from "../utils/coin";

type Transaction = {
    crypto: string,
    montant: number,
    date: string
}

export const TransactionsInfo: FunctionComponent = ({ }) => {
    const [transaction, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('/api/getTransactions')
            .then((res) => res.json())
            .then((data) => {
                console.log("DATA", data)
                setTransaction(data.transactions as Transaction[])
            })
    }, [])

    if (transaction) {

        return (
            <div>
                <div>{transaction.slice(0, 6).map(({ crypto, montant, date }) =>
                    <ul className="form">
                        <li>Transaction: {date}</li>
                        <li>Crypto: {crypto}</li>
                        <li>Montant: {montant} </li>

                    </ul>
                )} </div>

            </div>
        )
    }
}