import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, SmsModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
