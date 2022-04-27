import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Relation, BaseEntity } from "typeorm";
import "reflect-metadata";
import { User } from "./User";

@Entity()
export class Transactions extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // crypto: string;

    // @Column({ type: "float"})
    // montant: number;

    // @Column({ type: "date"})
    // date_transaction: string

    @ManyToOne(()=> User, (user) => user.transactions, {
        cascade: true
    })
    user: Relation <User>;
}