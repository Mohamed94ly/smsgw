import { forwardRef, Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from './entities/Manager.entity';
import { AppModule } from 'src/app.module';

@Module({
  imports: [TypeOrmModule.forFeature([Manager]), 
    forwardRef(() => AppModule)],
  exports: [ManagerService],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}
