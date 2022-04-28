import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Relation, BaseEntity } from "typeorm";
import { PersoList } from "./PersoList";
import "reflect-metadata";

@Entity()
export class Crypto extends BaseEntity{
    constructor(name:string, quantity:number){
        super()
        this.name = name;
        this.quantity = quantity;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @ManyToOne(()=> PersoList, (lists) => lists.crypto, {
        cascade: true
    })
    perso_list: Relation<PersoList>
}