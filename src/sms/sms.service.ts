import { Injectable } from '@nestjs/common';
import { CreateSmDto } from './dto/create-sm.dto';
import { UpdateSmDto } from './dto/update-sm.dto';
<<<<<<< HEAD
=======
import { Repository } from 'typeorm';
import { Logsms } from './entities/logsms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDTO } from './dto/pagination.dto';
import { AppService } from 'src/app.service';
>>>>>>> 09ff45ca1337581ce8f743fe3cb9e2714a6b295b

@Injectable()
export class SmsService {
  
  constructor(@InjectRepository(Logsms) private logsmsRepository: Repository<Logsms>, 
   private appService: AppService) {
  }

  create(createSmDto: CreateSmDto) {
    let typeSMS = this.appService.checkTypeSMS(createSmDto.msg);
    if( typeSMS != ""){
      createSmDto.type = typeSMS;
    }

    const response = this.logsmsRepository.save(createSmDto);
    return response;
  }

  async findAll(paginationDTO: PaginationDTO) {
    return await this.logsmsRepository.find({
      skip: paginationDTO.skip,
      take: paginationDTO.limit ?? 10
    });
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
<<<<<<< HEAD

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
=======
>>>>>>> 09ff45ca1337581ce8f743fe3cb9e2714a6b295b
}
