import { Injectable } from '@nestjs/common';
import { CreateSmDto } from './dto/create-sm.dto';
import { UpdateSmDto } from './dto/update-sm.dto';
import axios from 'axios';

@Injectable()
export class SmsService {
  create(createSmDto: CreateSmDto) {
    // insert data to database & check type of sms
    return 'This action adds a new sm';
  }

  findAll() {
    return `This action returns all sms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sm`;
  }

  update(id: number, updateSmDto: UpdateSmDto) {
    return `This action updates a #${id} sm`;
  }

  remove(id: number) {
    return `This action removes a #${id} sm`;
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
  }

  async sendSMS(sms: string, phone: number){
    const token = process.env.TOKEN_SMS;
    const ipGW = process.env.IP_GW;
    const portGW = process.env.PORT_GW;
    const url = "http://" + ipGW + ":" + portGW + "/?number=" + phone + "&message=" + sms + "&token=" + token;

    try{
      const response = await axios.get(url);
    }catch(e){
    }
    return url;
  }

  checkSendedSMSToday(){
    // check if the client send sms today
    return "true";
  }
}
