import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from './users.service';
import { response, responseError } from 'src/helpers/response.helper';


@Controller('user')
export class UsersController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    async findOne(@Request() req) {
        try{
            const data = await this.userService.getUser(req.header('Authorization') || req.query.access_token);
            return response('Get user data success', data);
        } catch (error) {
            return responseError(error.message, 400);
        }
    }
}
