import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';

/**
 * Install dependencies: npm install --save @nestjs/typeorm typeorm mysql
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: (config: EnvironmentService) => {

        return {
        //   ...typeOrmConfig,
          type: "mysql",
          host: config.get('DB_HOST'),
          port: Number(config.get('DB_PORT')),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_DATABASE'),
          keepConnectionAlive: true,
          entities: [__dirname + '/../../entities/*{.ts,.js}'],
          logging: config.getBoolean('DB_LOGGING'),
          charset: 'utf8mb4',
          timezone: 'Z',
        };
      },
    }),
  ],
})
export class DatabaseModule {}
