import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'logsms'})
export class Logsms {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true})
    created_at: Date;

    @Column({type:"varchar", length: 200, nullable: true})
    msg: string;

    @Column({type:"varchar", length: 50, nullable: true})
    phone: string;

    @Column({type:"varchar", length: 50, nullable: true})
    type: string;
}
