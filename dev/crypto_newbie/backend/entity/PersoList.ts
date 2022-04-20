import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Relation, OneToMany, BaseEntity } from "typeorm";
import { Crypto } from "./Crypto";
import { Portfolio } from "./Portfolio";
import "reflect-metadata";

@Entity()
export class PersoList extends BaseEntity {
    constructor(name:string){
        super()
        this.name = name
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> Portfolio, (portfolio) => portfolio.perso_list, {
        cascade: true
    })
    portfolio: Relation<Portfolio>

    @OneToMany(()=> Crypto, (crypto) => crypto.perso_list)
    @JoinColumn()
    crypto: Relation <Crypto[]>
}