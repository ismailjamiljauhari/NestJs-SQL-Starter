import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
import { RegisterDTO } from 'src/auth/dto/register.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
    ) { }

    async findById(id: number) {
        return await this.usersRepository.findOne({ where: { id: id } });
    }

    async findByEmail(email: string): Promise<UsersDTO> {
        return await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });
    }

    
    async create(payload: RegisterDTO) {
        const user = await this.usersRepository.create(payload);
        await this.usersRepository.save(user);

        return user;
    }

    async update(id: number, data: Partial<UsersDTO>) {
        await this.usersRepository.update({ id }, data);
        return await this.usersRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
    }
}
