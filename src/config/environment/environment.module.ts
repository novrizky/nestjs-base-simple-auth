import { Module, Global } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
@Global()
@Module({
  providers: [
    {
      provide: EnvironmentService,
      useValue: new EnvironmentService('.env'),
    },
  ],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
