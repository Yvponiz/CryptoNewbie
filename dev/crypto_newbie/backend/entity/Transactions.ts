import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Relation, BaseEntity } from "typeorm";
import "reflect-metadata";
import { User } from "./User";

@Entity("Transactions")
export class Transactions extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    crypto: string;

    @Column({
        type: "float",
        nullable: true
    })
    montant: number;

    @Column({
        type: "date",
        nullable: true
    })
    date_transaction: string

    @ManyToOne(() => User, (user) => user.transactions, {
        cascade: true
    })
    user: Relation<User>;
}