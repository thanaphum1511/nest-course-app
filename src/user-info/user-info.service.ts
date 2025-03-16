import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserInfo } from './entities/user-info.entity';
@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private userModel: typeof UserInfo,
  ) {}

  async create(createUserInfoDto: CreateUserInfoDto) {
    return await this.userModel.create(
      createUserInfoDto as Partial<UserInfo>,
    );
  }

  async findAll() {
    return await this.userModel.findAll({
    order: [['id','desc']],
  })};

  async findOne(id: number) {
    return await this.userModel.findByPk(id);
  }

  async findFistname(fistname: string){
    return await this.userModel.findOne({
      where:{
        fistname: fistname,
      },
    });
  }

  async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return await this.userModel.update(updateUserInfoDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    return await this.userModel.destroy({
      where: { id: id},
    });
  }
}
