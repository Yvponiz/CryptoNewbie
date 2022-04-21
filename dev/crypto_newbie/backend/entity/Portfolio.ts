import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, Relation, BaseEntity } from "typeorm";
import { PersoList } from "./PersoList";
import { User } from "./User";
import "reflect-metadata";

@Entity()
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
}