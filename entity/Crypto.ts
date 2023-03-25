import { Entity, Column, ManyToOne, Relation, BaseEntity, PrimaryColumn } from "typeorm";
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

    @PrimaryColumn()
    nameId: string;

    @Column({ nullable: true })
    name: string;

    @Column({
        nullable: true,
    })
    quantity: number;

    @Column({
        nullable: true,
        type: 'float'
    })
    averagePrice: number;

    @ManyToOne(() => Portfolio, (portfolio) => portfolio.crypto, {
        cascade: true
    })
    portfolio: Relation<Portfolio>;
}