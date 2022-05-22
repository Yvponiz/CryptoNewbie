import { FormEvent, FunctionComponent, useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/coinContext";
import { Coin } from "../utils/coin";

export type CoinBuyProps = {
    coinId: string
}

function onSubmit(event: FormEvent, state) {
    event.preventDefault()
    fetch("/api/buyCrypto",
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
                window.location.href = "/portfolio"
            }
            else if (data.status === "erreur") {
                window.alert(data.errors.join("\n"))
            }
            console.log(data)
        })
    console.log(state)
}

export const BuyBox: FunctionComponent<CoinBuyProps> = ({ coinId }) => {
    const coinState = useContext(CoinContext)
    const [state, changeState] = useState({
        quantity: null,
        total: null,
        name: null,
        nameId: null,
        averagePrice: null
    })

    if (coinState) {
        const quantity = state.quantity;
        const price = parseFloat(coinState.market_data.current_price.cad.toFixed(5));
        const total = quantity * price;
        state.total = total;
        state.name = coinState.name;
        state.nameId = coinState.id;
        state.averagePrice = parseFloat(price.toFixed(2));

        return (
            <form className="transaction-box" action="/" method="post" onSubmit={(event) => onSubmit(event, state)}>
                <h2>Transaction</h2>
                <div style={{ display: 'flex', justifyContent:'space-evenly',width:'100%'}}>
                    <div className="transaction-box-column">
                        <label htmlFor="name">Crypto : </label>
                        <label htmlFor="quantity">QuantitÃ© : </label>
                        <label htmlFor="price">Prix : </label>
                        <label htmlFor="total">Total: </label>
                    </div>
                    <div className="transaction-box-column">
                        <input
                            onChange={(event) => changeState({ ...state, nameId: event.target.value })}
                            type="hidden" id="nameId" name="nameId" value={coinState.id} disabled />
                        <input
                             onChange={(event) => changeState({ ...state, name: event.target.value })}
                            type="text" id="name" name="name" value={coinState.name} disabled />
                        <input onChange={(event) => changeState({ ...state, quantity: event.target.value })}
                            type="number" id="quantity" name="quantity" required />
                        <input
                            type="text" id="price" name="price" disabled
                            value={price.toLocaleString(undefined, {'minimumFractionDigits': 2, 'maximumFractionDigits':2})}  />
                        <input 
                            onChange={(event) => changeState({ ...state, total: event.target.value })}
                            type="text" id="total" name="total" value={total.toFixed(2)}  disabled/>
                    </div>
                </div>

                <button type="submit">Confirmer</button>
            </form>
        )
    }
    return (
        null
    )
}