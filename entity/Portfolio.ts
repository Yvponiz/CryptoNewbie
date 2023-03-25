import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, Relation, BaseEntity } from "typeorm";
import { User } from "./User";
import { Crypto } from "./Crypto";
import "reflect-metadata";

@Entity("Portfolio")
export class Portfolio extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'float',
        nullable: true
        
    })
    value: number;

    @OneToOne(() => User, (user) => user.portfolio, {
        cascade: true
    })
    user: Relation<User>

    @OneToMany(() => Crypto, (crypto) => crypto.portfolio)
    crypto: Relation<Crypto[]>
}