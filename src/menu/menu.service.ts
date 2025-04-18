import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';  // Import Sequelize operators
import { Menu } from './entities/menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu)
    private readonly menuModel: typeof Menu,
  ) {}

  async createMenuItem(createDto: CreateMenuDto): Promise<Menu> {
 
    const { name, description, price, imageUrl, category } = createDto;

    return this.menuModel.create({
      name,
      description,
      price,
      imageUrl, 
      category,
    });
  }

  //

  async getMenuById(id: number): Promise<Menu | null> {
    return this.menuModel.findByPk(id);
  }

  async updateMenuItem(id: number, updateDto: UpdateMenuDto): Promise<Menu> {
    const menuItem = await this.menuModel.findByPk(id);
    if (menuItem) {
      return menuItem.update(updateDto);
    }
    throw new Error('Menu item not found');
  }

  async deleteMenuItem(id: number): Promise<void> {
    const menuItem = await this.menuModel.findByPk(id);
    if (menuItem) {
      await menuItem.destroy();
      return;
    }
    throw new Error('Menu item not found');
  }

  async searchMenu(name: string, category: string, priceMin: number, priceMax: number) {
    const whereConditions = {};
  
    if (name) {
      whereConditions['name'] = { [Op.like]: `%${name}%` };
    }
    if (category) {
      whereConditions['category'] = category;
    }
    
    if (priceMin || priceMax) {
      whereConditions['price'] = {};
      if (priceMin) {
        whereConditions['price'][Op.gte] = priceMin;
      }
      if (priceMax) {
        whereConditions['price'][Op.lte] = priceMax;
      }
    }
  
    return this.menuModel.findAll({
      where: whereConditions,
    });
  }
}
  

