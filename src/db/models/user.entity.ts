import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Message } from "./message.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @JoinColumn({name: "user_id"})
    userConnection: Promise<User>;

    @OneToMany(
        () => Message,
        message => message.userConnection
    )

    messageConnection: Promise<Message[]>;
}