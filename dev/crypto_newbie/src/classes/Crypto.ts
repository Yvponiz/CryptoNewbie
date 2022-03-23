import axios from "axios"


export class Crypto {
    constructor(rank:number, nom:string, symbol:string, price:number, marketCap:number){
        this.rank = rank
        this.nom = nom
        this.symbol = symbol
        this.price = price
        this.marketCap = marketCap
    }

    rank:number;
    nom:string;
    symbol:string;
    price:number;
    marketCap:number;

}
