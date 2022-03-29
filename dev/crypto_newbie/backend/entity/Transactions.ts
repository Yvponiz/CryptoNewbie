import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, Relation } from "typeorm";
import "reflect-metadata";
import { Utilisateur } from "./Utilisateur";

@Entity()
export class Transactions {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    crypto: string;

    @Column({ type: "float"})
    montant: number;

    @Column({ type: "date"})
    date_transaction: string

    @ManyToOne(()=> Utilisateur, (utilisateur) => utilisateur.transactions, {
        cascade: true
    })
    utilisateur: Relation <Utilisateur>
}