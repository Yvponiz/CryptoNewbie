import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

// const bcrypt = require('bcrypt')
// const saltRounds = 10
// const salt = bcrypt.genSaltSync(saltRounds);

export const TypeCompte = {
    1:{Type:"Debutant", Montant:1000, Value:1},
    2:{Type:"Amateur", Montant:5000, Value:2},
    3:{Type:"Pro", Montant:10000, Value:3}
}


@Entity()
export class Utilisateur {
    constructor(nom:string, prenom:string, courriel:string,id_type_compte:number, password:string, date_naissance:string){
        this.nom = nom
        this.prenom = prenom
        this.courriel = courriel
        this.id_type_compte = id_type_compte
        this.password = password
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

    @Column()
    id_type_compte: number;

    @Column({ type: 'date' })
    date_naissance: string

}