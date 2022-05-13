import { FunctionComponent, useEffect, useState } from "react";


export const PortfolioInfo: FunctionComponent = ({}) => {
    const [portfolio, setPortfolio] = useState({
        value:null,
        crypto: null
    })

    useEffect(() => {
        fetch('/api/getPortfolio')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPortfolio(data)
            })
    }, [])

    if(portfolio){

        return (
            <div>
                {portfolio.value}
                {portfolio.crypto}
            </div>
        )
    }
}