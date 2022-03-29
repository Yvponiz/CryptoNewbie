import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, Relation } from "typeorm";
import "reflect-metadata";
import { ListePerso } from "./ListePerso";
import { Utilisateur } from "./Utilisateur";

@Entity()
export class Portfolio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valeur: number;

    @OneToOne(()=> Utilisateur, (utilisateur) => utilisateur.portfolio, {
        cascade: true
    })
    utilisateur: Relation<Utilisateur>

    @OneToMany(()=> ListePerso, (liste_perso) => liste_perso.portfolio)
    @JoinColumn()
    liste_perso: Relation <ListePerso[]>
}