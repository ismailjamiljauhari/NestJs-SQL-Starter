import { IsNotEmpty } from 'class-validator'

export class LoginSocialiteDTO {
    @IsNotEmpty()
    token: string;
}
