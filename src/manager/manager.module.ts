import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from './entities/Manager.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manager])],
  exports: [ManagerService],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}
