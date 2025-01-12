import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logsms } from './entities/logsms.entity';

@Module({
  imports: [],
  controllers: [SmsController],
  providers: [SmsService],
})
export class SmsModule {}
