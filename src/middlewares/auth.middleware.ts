import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { UserService } from '../modules/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService){

  }
  async use(req: any, res: any, next: () => void) {
    
    // check if Authorization header is exist
    const authorization = req.header('Authorization') || req.query.access_token;
    if (!authorization) {
      throw new HttpException({ message: 'Required Access Token.' }, 401);
    }
    next();
  }
}
