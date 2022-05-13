import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Relation, BaseEntity } from "typeorm";
import { Portfolio } from "./Portfolio";
import "reflect-metadata";

@Entity("Crypto")
export class Crypto extends BaseEntity {
    constructor(nameId: string, name: string, quantity: number) {
        super()
        this.nameId = nameId;
        this.name = name;
        this.quantity = quantity;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    nameId: string;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    quantity: number;

    @ManyToOne(() => Portfolio, (portfolio) => portfolio.crypto, {
        cascade: true
    })
    portfolio: Relation<Portfolio>;
}