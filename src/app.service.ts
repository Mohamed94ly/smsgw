import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NestJS ...!';
  }

  async sendMessageFromSMS(msg: string, phone: string){
    const token = process.env.TOKEN_SMS;
    const ipGW = process.env.IP_GW;
    const portGW = process.env.PORT_GW;
    const url = "http://" + ipGW + ":" + portGW + "/?number=" + phone + "&message=" + msg + "&token=" + token;

    try{
      const response = await axios.get(url);
      return response.data;
    }catch(error){
      console.log(error);
    }
  }

  async sendMessagesFromTelgram(msg: string){
    const BOT_ID = process.env.BOT_ID;
    const CHAT_ID = process.env.CHAT_ID;

    const url = "https://api.telegram.org/"+ BOT_ID +"/sendMessage?chat_id="+CHAT_ID+"&text=" + msg;
    
    try{
      const response = await axios.get(url);
      return response.data;
    }catch(error){
      console.log(error);
    }
  }

  checkSendedSMSToday(){
    // check if the client send sms today
    return "true";
  }
}
