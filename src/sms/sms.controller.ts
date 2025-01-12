import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ValidationPipe } from '@nestjs/common';
import { SmsService } from './sms.service';
import { CreateSmDto } from './dto/create-sm.dto';
import { UpdateSmDto } from './dto/update-sm.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { PaginationDTO } from './dto/Pagination.dto';

@Controller('sms')
@UseGuards(JwtAuthGuard)
export class SmsController {
  constructor(private smsService: SmsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createSmDto: CreateSmDto) {
    return this.smsService.create(createSmDto);
  }

<<<<<<< HEAD
  @Get('sms')
  sendSms() {
    //return "send sms";
    //return this.smsService.sendMessageFromSMS("test", "0927356481");
  }

  @Get('telgram')
  sendTelgram() {
    //return "send telgram";
    //return this.smsService.sendMessagesFromTelgram("test");
  }

=======
>>>>>>> 09ff45ca1337581ce8f743fe3cb9e2714a6b295b
  @Get()
  findAll(@Query() paginationDTO: PaginationDTO){
    return this.smsService.findAll(paginationDTO);
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
