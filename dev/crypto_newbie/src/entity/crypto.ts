import { Entity } from "typeorm";

@Entity()
export class Crypto {
    constructor(id:string, symbole:string, nom:string, prix:number, marketCap:number, rang:number){
        this.id = id
        this.symbole = symbole
        this.nom = nom
        this.marketCap = marketCap
        this.rang = rang
    }

    id:string;
    symbole:string;
    nom:string;
    marketCap:number;
    rang:number;
}