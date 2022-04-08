import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule } from './typeorm/typeorm.module';
import { TypeormService } from './typeorm/typeorm.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeormService
    }), 
    TypeormModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
