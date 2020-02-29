import { Module, Global } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';

@Global()
@Module({
  providers: [UserService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}
