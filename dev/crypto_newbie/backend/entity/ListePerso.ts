import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, Relation, OneToMany } from "typeorm";
import "reflect-metadata";
import { Crypto } from "./Crypto";
import { Portfolio } from "./Portfolio";

@Entity()
export class ListePerso {
    constructor(nom:string){
        this.nom = nom
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @ManyToOne(()=> Portfolio, (portfolio) => portfolio.liste_perso, {
        cascade: true
    })
    portfolio: Relation<Portfolio>

    @OneToMany(()=> Crypto, (cryptomonnaie) => cryptomonnaie.liste_perso)
    @JoinColumn()
    crypto: Relation <Crypto[]>
}