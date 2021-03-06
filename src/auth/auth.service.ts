import { Injectable } from '@nestjs/common'; 
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.findUserByEmail(email);
        if (user) {
            const isMatch = await bcrypt.compare(pass, user.password);
            const { password, ...result } = user;
            if (!isMatch) {
                return null
            }

            return result;
        }
        return null;
    }

    async register(payload: RegisterDTO) {
        const user = await this.userService.create(payload)

        return user
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async getCurrentUser(email: string): Promise<any> {
        const user = await this.findUserByEmail(email);
        return user;
    }

    private async findUserByEmail(email: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            return null;
        }

        return user;
    }
}
