import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmsService } from './sms.service';
import { CreateSmDto } from './dto/create-sm.dto';
import { UpdateSmDto } from './dto/update-sm.dto';

@Controller('sms')
export class SmsController {
  constructor(private smsService: SmsService) {}

  @Post()
  create(@Body() createSmDto: CreateSmDto) {
    return this.smsService.create(createSmDto);
  }

  @Get('sms')
  sendSms() {
    //return "send sms";
    return this.smsService.sendMessageFromSMS("test", "0927356481");
  }

  @Get('telgram')
  sendTelgram() {
    //return "send telgram";
    return this.smsService.sendMessagesFromTelgram("test");
  }

  @Get()
  findAll() {
    return this.smsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmDto: UpdateSmDto) {
    return this.smsService.update(+id, updateSmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smsService.remove(+id);
  }


}
