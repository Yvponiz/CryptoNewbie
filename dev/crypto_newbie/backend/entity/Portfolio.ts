import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, Relation, BaseEntity } from "typeorm";
import { PersoList } from "./PersoList";
import { User } from "./User";
import { Crypto } from "./Crypto";
import "reflect-metadata";

@Entity("Portfolio")
export class Portfolio extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @OneToOne(() => User, (user) => user.portfolio, {
        cascade: true
    })
    user: Relation<User>

    @OneToMany(() => PersoList, (perso_list) => perso_list.portfolio)
    @JoinColumn()
    perso_list: Relation<PersoList[]>

    @OneToMany(() => Crypto, (crypto) => crypto.portfolio)
    @JoinColumn()
    crypto: Relation<Crypto[]>

}