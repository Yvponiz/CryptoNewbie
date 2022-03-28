import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, Relation } from "typeorm";
import "reflect-metadata";
import { Portfolio } from "./Portfolio";
import { Transactions } from "./Transactions";

// const bcrypt = require('bcrypt')
// const saltRounds = 10
// const salt = bcrypt.genSaltSync(saltRounds);

export enum UserRole {
    Admin = "Admin",
    Member = "Member",
    Public = "Public"
}

@Entity()
export class Utilisateur {
    constructor(nom:string, prenom:string, courriel:string, type_compte:number, password:string, date_naissance:string){
        this.nom = nom
        this.prenom = prenom
        this.courriel = courriel
        this.type_compte = type_compte
        this.password = btoa(password)
        this.date_naissance = date_naissance
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    courriel: string;

    @Column()
    password: string;

    @Column( {type: "float"})
    type_compte: number;

    @Column({ type: 'date' })
    date_naissance: string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.Member
    })
    role: UserRole;

    @OneToOne(()=> Portfolio) // Liaison vers la table Portfolio
    @JoinColumn()
    portfolio: Relation <Portfolio>

    @OneToMany(()=> Transactions, (transactions) => transactions.utilisateur)
    @JoinColumn()
    transactions: Relation <Transactions[]>
}