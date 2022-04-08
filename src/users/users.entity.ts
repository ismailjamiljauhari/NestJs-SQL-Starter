import { Column, Entity } from "typeorm";
import { AbstractEntity } from "common/entities/abstract.entity";

@Entity('users')
export class UsersEntity extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}