import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator'

export class LoginDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string
}
