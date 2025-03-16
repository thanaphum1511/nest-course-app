import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('/create')
  async create(@Body() createUserInfoDto: CreateUserInfoDto) {
    const createUserInfo = await this.userInfoService.create(createUserInfoDto);
    if (createUserInfo == null){
      throw new Error('Can not Create Data!!!');
    }
    return {
      message: 'Create Data Complete',
      data: createUserInfo,
    };
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const finduser = await this.userInfoService.findOne(+id);
    if (finduser == null){
      throw new NotFoundException('Not Found Data!!!');
    }
    return finduser;
  }

  @Get('/findfistname/:fistname') // localhost:3000/findfirstname/:firstname
  async findfirstname(@Param('fistname') fistname: string) {
    const findfistname = await this.userInfoService.findFistname(fistname);
    if (findfistname == null){
      throw new NotFoundException('Not Found Data!!!');
    }
    return findfistname;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string, 
    @Body() updateUserInfoDto: UpdateUserInfoDto) {
    const [updateUserInfo] = await this.userInfoService.update(
      +id, 
      updateUserInfoDto,
    );
    console.log(updateUserInfo);
    if (updateUserInfo == 0){
      throw new NotFoundException('Not Found Data to Update!!!');
    }
    return { message: 'Update Data Complete '};
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destroyUserInfo = await this.userInfoService.remove(+id);
    console.log(destroyUserInfo);
    if (destroyUserInfo == 0){
      throw new NotFoundException('Not Found Data to Remove!!!');
    }
    return { message: 'Remove Data Complete '};
  }
}