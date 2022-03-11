import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class utilisateur {

    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    courriel: string;

    @Column()
    mot_de_passe: string;

    @Column()
    id_type_compte: number;

    @Column()
    id_portfolio: number;
}