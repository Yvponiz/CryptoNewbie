export default async function quickSort(listCrypto, element){
    //console.log(array.slice(0,5).map(coin => coin.element));
    let list = listCrypto.slice(0,25)
    for(let i = 0; i < list.length; i++){
        for(let j = i - 1; j >= 0; j--){
            if (element === "name"){
                if (list[j + 1].name < (list[j].name)){
                    [list[j + 1], list[j]] = [list[j], list[j + 1]]
                } 
            }
             //if(listCrypto[i + 1] < listCrypto[j]){
                //[arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
        }
    }
        console.log(list)
        return list
}
