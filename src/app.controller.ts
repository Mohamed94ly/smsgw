import { Controller, Get } from '@nestjs/common';
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
}
