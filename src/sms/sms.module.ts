import { forwardRef, Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logsms } from './entities/logsms.entity';
import { AppModule } from 'src/app.module';

@Module({
  imports: [TypeOrmModule.forFeature([Logsms]), 
    forwardRef(() => AppModule)],
  controllers: [SmsController],
  providers: [SmsService],
  exports: [SmsService]
})
export class SmsModule {}
