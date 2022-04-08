import { Exclude } from 'class-transformer';
import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"

export abstract class AbstractEntity {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;

    @CreateDateColumn()
    @Exclude()
    created_at: Date;

    @UpdateDateColumn()
    @Exclude()
    updated_at: Date;
}