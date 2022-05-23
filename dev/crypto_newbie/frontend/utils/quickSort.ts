export default async function quickSort(listCrypto, element){
    let list = listCrypto.slice(0,25)
    for(let i = 0; i < list.length; i++){
        for(let j = i - 1; j >= 0; j--){
            if (element === "name"){
                if (list[j + 1].name > (list[j].name)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                } 
            }
            else if (element === "rank"){
                if (list[j + 1].market_data.market_cap_rank > (list[j].market_data.market_cap_rank)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if (element === "symbol"){
                if (list[j + 1].symbol > (list[j].symbol)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if (element === "current_price"){
                if (list[j + 1].market_data.current_price.cad > (list[j].market_data.current_price.cad)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if (element === "24h_growth"){
                if (list[j + 1].market_data.price_change_percentage_24h > (list[j].market_data.price_change_percentage_24h)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if (element === "market_cap"){
                if (list[j + 1].market_data.market_cap.cad > (list[j].market_data.market_cap.cad)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if (element === "logo"){
                if (list[j + 1].image.small > (list[j].image.small)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if(element === "crypto"){
                if (list[j + 1].crypto > (list[j].crypto)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if(element === "date"){
                if (list[j + 1].date > (list[j].date)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if(element === "price"){
                if (list[j + 1].montant > (list[j].montant)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if(element === "name_crypto"){
                if (list[j + 1].name > (list[j].name)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if(element === "quantity"){
                if (list[j + 1].quantity > (list[j].quantity)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
            else if(element === "average_price"){
                if (list[j + 1].averagePrice > (list[j].averagePrice)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                }
            }
        }
    }
    return list
}

// Source - Exemple de tri rapide en JavaScript
//https://www.section.io/engineering-education/sorting-algorithms-in-js/
