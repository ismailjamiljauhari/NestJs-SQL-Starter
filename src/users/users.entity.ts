import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "common/entities/abstract.entity";

@Entity('users')
export class UsersEntity extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    // @BeforeInsert()
    // hashPassword() {
    //     this.password = crypto.createHmac('sha256', this.password).digest('hex');
    // }
    @Column()
    password: string;
}