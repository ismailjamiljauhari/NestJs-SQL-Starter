import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';

import { AuthService } from './auth.service';
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
}
