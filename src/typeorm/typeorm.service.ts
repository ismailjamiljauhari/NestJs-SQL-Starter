import {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PORT,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
} from 'config/database'
import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        return {
            type: 'mysql',
            host: DATABASE_HOST,
            port: DATABASE_PORT,
            username: DATABASE_USERNAME,
            password: DATABASE_PASSWORD,
            database: DATABASE_NAME,
            entities: ["dist/src/**/entities/*.entity{.ts,.js}"],
            synchronize: true,
            autoLoadEntities: true,
        }
    }
}
