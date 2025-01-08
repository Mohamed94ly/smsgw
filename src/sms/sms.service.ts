import { Injectable } from '@nestjs/common';
import { CreateSmDto } from './dto/create-sm.dto';
import { UpdateSmDto } from './dto/update-sm.dto';
import { Repository } from 'typeorm';
import { Logsms } from './entities/logsms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDTO } from './dto/pagination.dto';
import { AppService } from 'src/app.service';

@Injectable()
export class SmsService {
  appService;
  constructor(@InjectRepository(Logsms) private logsmsRepository: Repository<Logsms>, 
   appService: AppService) {
    this.appService = appService;
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
}
