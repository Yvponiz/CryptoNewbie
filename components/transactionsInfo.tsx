import { FunctionComponent, useEffect, useState } from "react";
import quickSort from "../../utils/quickSort";

type Transaction = {
    crypto: string,
    montant: number,
    date: string,
    type: string
}

export const TransactionsInfo: FunctionComponent = ({ }) => {
    const [transaction, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('/api/getTransactions')
            .then((res) => res.json())
            .then((data) => {
                setTransaction(data.transactions as Transaction[])
            })
    }, [])

    const sort = (async (e) => {
        let newList = await quickSort(transaction, e.target.id)
        setTransaction(newList);
    })

    if (transaction) {

        return (
            <div className="transaction-section">
                <h1 className="transaction-title">Historique de vos transactions</h1>
                <div className="transaction-title-list">
                    <li id="date" onClick={sort} className="title-elem">Date</li>
                    <li id="crypto" onClick={sort} className="title-elem">Crypto</li>
                    <li id="price" onClick={sort}className="title-elem">Montant</li>
                    <li id="type" className="title-elem">Type de transaction</li>
                </div>
                <div className="transaction-list">{transaction.slice(0, transaction.length).map(({ crypto, montant, date, type }) =>
                    <div className="transaction-elem">
                        <li>{date}</li>
                        <li>{crypto}</li>
                        <li>{montant} $</li>
                        <li>{type}</li>
                    </div>
                )} </div>

            </div>
        )
    }
}