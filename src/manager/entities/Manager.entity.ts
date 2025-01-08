import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'manager'})
export class Manager {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar", length: 25, nullable: true})
    user: string;

    @Column({type:"varchar", length: 150, nullable: true})
    pass: string;

    @Column({type:"boolean", nullable: true, default: false})
    disabled: boolean;
}