import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './config/auth/auth.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { DatabaseModule } from './config/database/database.module';
import { EnvironmentModule } from './config/environment/environment.module';
import { UserModule } from './modules/users/users.module';

@Module({
  imports: [
    DatabaseModule,
    EnvironmentModule,
    AuthModule, 
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
      )
      .forRoutes(
        { path: 'auth/*', method: RequestMethod.GET },
        { path: 'user/*', method: RequestMethod.ALL }
      )
  }
}
