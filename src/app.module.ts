import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logsms } from './sms/entities/logsms.entity';
import { Manager } from './manager/entities/Manager.entity';
import { ManagerModule } from './manager/manager.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      timezone: 'utc',
      entities: [Logsms, Manager],
      synchronize: false,
    }),
<<<<<<< HEAD
    AuthModule, SmsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
=======
    AuthModule, SmsModule, ManagerModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
>>>>>>> 09ff45ca1337581ce8f743fe3cb9e2714a6b295b
})
export class AppModule {}
