import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import "reflect-metadata";


@Entity()
export class Session extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uuid: string;

    @Column()
    data: string;
}