import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { Coin } from "../models/coin";

interface Crypto {
    nameId: string,
    name: string,
    quantity: string,
    total: string
}

type SellProps = {
    coin?: Crypto
}

export const SellComponent: FunctionComponent<SellProps> = ({}) => {
    const [showDiv, setShowDiv] = useState(false);
    const [userCryptos, setUserCryptos] = useState<Crypto[]>([]);
    const [sellingCoin, setSellingCoin] = useState<Crypto>()

    useEffect(() => {
        fetch('/api/getCryptos')
            .then((res) => res.json())
            .then((data) => {
                setUserCryptos(data.cryptos as Crypto[])
            })
    }, [])

    if (userCryptos) {

        return (
            <div>
                <div className="sell-crypto-list">{userCryptos.slice(0, 5).map(({name, quantity }, key) =>
                    <div className="sell-crypto-list-elem" key={key}>
                        <li>Crypto : {name}</li>
                        <li>Quantité : {quantity}</li>
                        <button className="sell-button" onClick={() => { setShowDiv(true), setSellingCoin(userCryptos[key])}} key={key}> Vendre </button>
                    </div>
                )} </div>
                {showDiv ? <SellBox coin={sellingCoin}/> : null}
            </div>
        )
    }
    return(null)
}

export const SellBox: FunctionComponent<SellProps> = ({coin}) => {
    const [coinPrice, setCoinPrice] = useState<Coin>();
    const [state, changeState] = useState({
        quantity: null,
        total: null,
        name: coin.name,
        nameId: coin.nameId
    });

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coin.nameId}`)
            .then((res) => res.json())
            .then((data) => {
                setCoinPrice(data as Coin)
            })
    }, [])
    
    if (coinPrice){
        const quantity = state.quantity;
        const price = coinPrice.market_data.current_price.cad;
        state.total = quantity * price
        return (    
            <>
                <form className="transaction-box" action="/" method="post" onSubmit={(event) => onSubmit(event, state)}>
                    <h2>Transaction</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                        <div className="transaction-box-column">
                            <label htmlFor="name">Crypto : </label>
                            <label htmlFor="quantity">Quantité : </label>
                            <label htmlFor="price">Prix : </label>
                            <label htmlFor="total">Total: </label>
                        </div>
                        <div className="transaction-box-column">
                            <input onChange={(event) => changeState({ ...state, nameId: event.target.value })} type="hidden" id="nameId" name="nameId" value={coin.nameId} />
                            <input onChange={(event) => changeState({ ...state, name: event.target.value })} type="text" id="name" name="name" value={coin.name} />
                            <input onChange={(event) => changeState({ ...state, quantity: event.target.value })} type="number" id="quantity" name="quantity" required />
                            <input type="text" id="price" name="price" value={price.toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })} />
                            <input onChange={(event) => changeState({ ...state, total: event.target.value })} type="text" id="total" name="total" value={state.total.toFixed(2)} />
                        </div>
                    </div>
    
                    <button className="submit-button" type="submit">Confirmer</button>
                </form>
            </>
        )
    }
    return(null)
}

function onSubmit(event: FormEvent, state) {
    event.preventDefault()
    fetch("/api/sellCrypto",
        {
            body: JSON.stringify(state),
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
        }).catch((response) => response.json())
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "success") {
                window.location.href = "/transactions"
            }
            else if (data.status === "erreur") {
                window.alert(data.errors.join("\n"))
            }
            console.log(data)
        })
    console.log(state)
}
