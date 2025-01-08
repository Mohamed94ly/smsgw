import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sendSMS')
  async sendMessageFromSMS(){
    return "send sms";
    return this.appService.sendMessageFromSMS("Hello", "0917356481");
  }

  @Get('encrypt')
  async encrypt(@Body() body){
    return {'hash': await this.appService.hashText(body.pass)};
  }

  @Get('checkHass')
  async checkHass(@Body() body){
    const isMatch = this.appService.compareHash(body.pass, body.hash);
    return isMatch;
  }
}
