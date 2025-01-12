import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sendSMS')
<<<<<<< HEAD
  async sendMessageFromSMS(){
    return "send sms";
    return this.appService.sendMessageFromSMS("Hello", "0917356481");
  }
=======
  async sendMessageFromSMS(@Body() body){
    return this.appService.sendMessageFromSMS(body.msg, body.phone);
  }

  @Get('sendTelegram')
  async sendMessagesFromTelgram(@Body() body){
    return this.appService.sendMessagesFromTelgram(body.msg);
  }

  // @Get('encrypt')
  // async encrypt(@Body() body){
  //   return {'hash': await this.appService.hashText(body.pass)};
  // }

  // @Get('checkHass')
  // async checkHass(@Body() body){
  //   const isMatch = this.appService.compareHash(body.pass, body.hash);
  //   return isMatch;
  // }
>>>>>>> 09ff45ca1337581ce8f743fe3cb9e2714a6b295b
}
