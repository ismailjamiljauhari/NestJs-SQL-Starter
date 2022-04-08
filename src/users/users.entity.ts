import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, Unique } from "typeorm";
import { AbstractEntity } from "common/entities/abstract.entity";
@Entity('users')
@Unique(['email'])
export class UsersEntity extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}