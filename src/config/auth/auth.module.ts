import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Global()
@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule { }
