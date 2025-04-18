import { Controller, Get, Post, Param, Body, Put, Delete, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { QueryMenuDto } from './dto/query-menu.dto'; 

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createDto: CreateMenuDto) {
    return this.menuService.createMenuItem(createDto);
  }

  @Get('search')  
  async searchMenu(@Query() query) {
    const { name, category, priceMin, priceMax } = query;
    return this.menuService.searchMenu(name, category, priceMin, priceMax);
  }
  
//
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.menuService.getMenuById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateMenuDto) {
    return this.menuService.updateMenuItem(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.menuService.deleteMenuItem(id);
  }

 
}
