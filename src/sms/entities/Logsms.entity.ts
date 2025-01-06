import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'logsms'})
export class Logsms {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: new Date()})
    created_at: Date;

    @Column({nullable: true})
    msg: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    type: string;

    @Column({nullable: true})
    status: string;
}
