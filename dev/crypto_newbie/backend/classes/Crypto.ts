import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Relation } from "typeorm";
import "reflect-metadata";
import { ListePerso } from "./ListePerso";

@Entity()
export class Crypto {
    constructor(rank:number, nom:string, symbole:string, croissance:number, market_cap:number){
        this.rank = rank
        this.nom = nom
        this.symbole = symbole
        this.croissance = croissance
        this.market_cap = market_cap
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    rank: number;
    
    @Column()
    symbole: string;

    @Column({ type: "float"})
    croissance: number

    @Column({ type: "float"})
    market_cap: number

    @ManyToOne(()=> ListePerso, (listes) => listes.crypto, {
        cascade: true
    })
    liste_perso: Relation<ListePerso>
}