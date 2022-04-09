import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule as TypeormModuleConfig} from './typeorm/typeorm.module';
import { TypeormService } from './typeorm/typeorm.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { ApiResponseModule } from './api-response/api-response.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeormService
    }), 
    TypeormModuleConfig, AuthModule, ApiResponseModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
