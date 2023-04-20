import { FunctionComponent, useEffect, useState } from "react";
import quickSort from "../utils/quickSort";
import { useTranslation } from "react-i18next";

type Transaction = {
    crypto: string,
    montant: number,
    date: string,
    type: string
}

export const TransactionsInfo: FunctionComponent = ({ }) => {
    const [transaction, setTransaction] = useState<Transaction[]>([]);
    const { t } = useTranslation();

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
                <h1 className="transaction-title">{t('transaction.type')}</h1>
                <div className="transaction-title-list">
                    <li id="date" onClick={sort} className="title-elem">Date</li>
                    <li id="crypto" onClick={sort} className="title-elem">{t('transaction.coin')}</li>
                    <li id="price" onClick={sort} className="title-elem">{t('transaction.amount')}</li>
                    <li id="type" className="title-elem">{t('transaction.type')}</li>
                </div>
                <div className="transaction-list">{transaction.slice(0, transaction.length).map(({ crypto, montant, date, type }) =>
                    <div className="transaction-elem" key={crypto}>
                        <li>{date}</li>
                        <li>{crypto}</li>
                        <li>{montant} $</li>
                        <li style={{color: type === 'achat' ? 'green': 'red' }}>
                            {t(`transaction.${type}`)}
                        </li>
                    </div>
                )} </div>

            </div>
        )
    }
}