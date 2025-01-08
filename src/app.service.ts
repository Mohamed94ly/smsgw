import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'nestjs ..';
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

  checkTypeSMS(sms: string){
    let type1:string = "تم تفعيل حسابك";
    let type2:string = "ينتهى اشتراكك";
    let type3:string = "ome-30LYD-40GB";
    let type4:string = "ضافة بقيمة";
    let type5:string = "نعتذر";

    if(sms.search(type1) !== -1){
      return "تفعيل الخدمة";
    }else if(sms.search(type2) !== -1){
      return "نهاية الخدمة";
    }else if(sms.search(type3) !== -1){
      return "باقة الاساسية";
    }else if(sms.search(type4) !== -1){
      return "اضافة رصيد لوكيل";
    }else if(sms.search(type5) !== -1){
      return "رسالة اعتذار";
    }

    return "";
  }

  checkSendedSMSToday(){
    // check if the client send sms today
    return "true";
  }
}
