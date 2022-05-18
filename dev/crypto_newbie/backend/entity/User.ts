import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, Relation, BaseEntity } from "typeorm";
import { Portfolio } from "./Portfolio";
import { Transactions } from "./Transactions";
import "reflect-metadata";


export enum UserRole {
    Admin = "Admin",
    Member = "Member",
    Public = "Public"
}

@Entity("User")
export class User extends BaseEntity{
    constructor(lastName:string, firstName:string, email:string, accountType:string, accountAmount:number, password:string, dateOfBirth:string){
        super()
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.accountType = accountType;
        this.accountAmount = accountAmount;
        this.password = btoa(password);
        this.dateOfBirth = dateOfBirth;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    accountType: string;

    @Column( {type: "float"})
    accountAmount: number;

    @Column({ type: 'date' })
    dateOfBirth: string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.Member
    })
    role: UserRole;

    @OneToOne(()=> Portfolio)
    @JoinColumn()
    portfolio: Relation <Portfolio>

    @OneToMany(()=> Transactions, (transactions) => transactions.user)
    @JoinColumn()
    transactions: Relation <Transactions[]>
}