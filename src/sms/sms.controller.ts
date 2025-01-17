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
