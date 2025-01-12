import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logsms } from './sms/entities/logsms.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'rootjs',
      password: 'rootjs',
      database: 'smsgw',
      entities: [Logsms],
      synchronize: true,
    }),
    AuthModule, SmsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
