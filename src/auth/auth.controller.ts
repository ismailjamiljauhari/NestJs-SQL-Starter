import { Controller, UseGuards, Post, Request, Get, Param, NotFoundException, Body, HttpException, HttpStatus } from '@nestjs/common';

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from 'config/auth';
import { AuthService } from './auth.service';
import { LoginSocialiteDTO } from './dto/login-socialite.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService) { }
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getCurrentUserFromJWT(@Request() req) {
        return this.authService.getCurrentUser(req.user.username);
    }

    @Post('loginb/:provider')
    async loginWithSocialite(
        @Param('provider') provider, 
        @Body() payload: LoginSocialiteDTO,
        @Request() req
    ){
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
        else {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Ada masalah saat autentikasi, silahkan coba lagi!',
            }, HttpStatus.BAD_REQUEST);
        }
        
        return userPayload
    }
}
