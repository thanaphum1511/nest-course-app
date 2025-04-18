import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from './entities/menu.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

  
  imports: [SequelizeModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [MenuService],
  exports: [MenuService, SequelizeModule],
})
export class MenuModule {}
