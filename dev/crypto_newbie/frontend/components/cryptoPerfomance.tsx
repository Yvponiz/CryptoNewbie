import { useEffect, useState } from "react"


export default function BestCrypto() {
    const [handlerState, setHandler] = useState([])
    
    useEffect(() => { // Fetch les data coté client, empêche le data d'être constament fetch
        fetch('/api/coinGecko/') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHandler(data)
            })
    }, [])

    return (
        <div className="crypto-performance">
            {handlerState.slice(0,1).map((coin) => <div key={coin.id}> {coin.name}</div>)}
        </div>
    )
}