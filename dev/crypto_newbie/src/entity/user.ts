import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class utilisateur {
    constructor(nom:string, prenom:string, courriel:string,id_type_compte:number, password:string){
        this.nom = nom
        this.prenom = prenom
        this.courriel = courriel
        this.id_type_compte = id_type_compte
        this.password = password
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
}