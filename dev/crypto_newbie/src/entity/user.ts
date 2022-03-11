import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class utilisateur {

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