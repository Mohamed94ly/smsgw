import { forwardRef, Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logsms } from './entities/logsms.entity';
import { AppModule } from 'src/app.module';

@Module({
<<<<<<< HEAD
  imports: [],
=======
  imports: [TypeOrmModule.forFeature([Logsms]), 
    forwardRef(() => AppModule)],
>>>>>>> 09ff45ca1337581ce8f743fe3cb9e2714a6b295b
  controllers: [SmsController],
  providers: [SmsService],
  exports: [SmsService]
})
export class SmsModule {}
