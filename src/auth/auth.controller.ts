import { Controller, UseGuards, Post, Request, Get, Param, Body, HttpException, HttpStatus } from '@nestjs/common';

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from 'config/auth';
import { AuthService } from './auth.service';
import { LoginSocialiteDTO } from './dto/login-socialite.dto';
import { LoginDTO } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterDTO } from './dto/register.dto';

@Controller()
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    async register(
        @Body() payload: RegisterDTO
    ) {
        const registeredUser = await this.authService.register(payload)
        return registeredUser
    }

    @Post('login')
    async login(
        @Body() payload: LoginDTO
    ) {
        const user = await this.authService.validateUser(payload.email, payload.password)
        if (!user) {
            throw new HttpException({
                statusCode: HttpStatus.UNAUTHORIZED,
                message: 'Identitas tersebut tidak cocok dengan data kami.',
            }, HttpStatus.UNAUTHORIZED);
        }

        return this.authService.login(user)
    }

    @Post('loginb/:provider')
    async loginWithSocialite(
        @Param('provider') provider,
        @Body() payload: LoginSocialiteDTO,
    ) {
        const token = payload.token
        let userPayload = null
        if (provider == 'google') {
            try {
                const { OAuth2Client } = require('google-auth-library')
                const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    requiredAudience: GOOGLE_CLIENT_ID,
                });
                userPayload = ticket.getPayload()
            } catch (error) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Ada masalah saat autentikasi, silahkan coba lagi!',
                }, HttpStatus.BAD_REQUEST);
            }
        }

        if (provider == 'facebook') {

        }
        
        if (!userPayload) {

        }

        return userPayload
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getCurrentUserFromJWT(@Request() req) {
        return this.authService.getCurrentUser(req.user.username);
    }
}
