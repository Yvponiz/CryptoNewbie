import { useState, useEffect} from 'react'

export default function SearchResult() {
    const [handlerState, setHandler] = useState({id:"", name:"", market_data:{current_price:{cad:""}}})

    useEffect(() => { 
        fetch('/api/searchCrypto') 
        .then((res) => res.json())
        .then((data) => {
        console.log(data)
        setHandler(data)
        })
    }, [])

    return(
        <div>
            <li>{handlerState.name}</li>
            <li>{handlerState.id}</li>
            <li>-</li>
        </div>
    )
}