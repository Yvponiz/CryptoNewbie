import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Relation, BaseEntity } from "typeorm";
import { PersoList } from "./PersoList";
import "reflect-metadata";

@Entity()
export class Crypto extends BaseEntity{
    constructor(name:string, symbol:string, growth:number, market_cap:number){
        super()
        this.name = name
        this.symbol = symbol
        this.growth = growth
        this.market_cap = market_cap
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    symbol: string;

    @Column({ type: "float"})
    growth: number

    @Column({ type: "float"})
    market_cap: number

    @ManyToOne(()=> PersoList, (lists) => lists.crypto, {
        cascade: true
    })
    perso_list: Relation<PersoList>
}