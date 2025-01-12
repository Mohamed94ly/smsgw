import { HttpException, Injectable } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/Manager.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppService } from 'src/app.service';

@Injectable()
export class ManagerService {

  constructor(@InjectRepository(Manager) private managerRepository: Repository<Manager>, private appService:AppService){}

  async create(createManagerDto: CreateManagerDto) {

    if(await this.findOneByUsername(createManagerDto.user))
      throw new HttpException('User already exists', 404);;

    const hash = await this.appService.hashText(createManagerDto.pass)

    createManagerDto.pass = hash;

    return this.managerRepository.save(createManagerDto);
  }

  findAll() {
    return `This action returns all manager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manager`;
  }

  update(id: number, updateManagerDto: UpdateManagerDto) {
    return `This action updates a #${id} manager`;
  }

  remove(id: number) {
    return `This action removes a #${id} manager`;
  }

  async findOneByUsername(username: string){
    return await this.managerRepository.findOneBy({user: username});
  }
}
