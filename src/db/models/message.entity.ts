import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./user.entity";

@Entity('messages')
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;
    
    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(
        () => User,
        user => user.messageConnection
    )
    @JoinColumn({name: 'user_id'})
    userConnection: Promise<User>;
}