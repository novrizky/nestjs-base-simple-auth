import { Controller, Post, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { response, responseError } from '../../helpers/response.helper';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ){}
    
    @Post('login')
    async login(@Request() req) {
        try{
            const data = await this.authService.login(req.body['username'], req.body['password']);
            return response('Login success', data);
        } catch (error) {
            return responseError(error.message, 400);
        }
    }

    @Get('checkToken')
    async checkToken(@Request() req) {
        try{
            const accessToken = req.header('Authorization') || req.query.access_token;
            const data = await this.authService.checkToken(accessToken);
            return response('Token Active');
        } catch (error) {
            return responseError(error.message, 400);
        }
    }

    @Get('logout')
    async logout(@Request() req) {
        try{
            const accessToken = req.header('Authorization') || req.query.access_token;
            const data = await this.authService.logout(accessToken);
            return response('You\'re logged out.');
        } catch (error) {
            return responseError(error.message, 400);
        }
    }
}
