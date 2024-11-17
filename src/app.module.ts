import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'sandbox',
      retryAttempts: 12,
      retryDelay: 4000,
      autoLoadEntities: false,
      entities: [User],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
