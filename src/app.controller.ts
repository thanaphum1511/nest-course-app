import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/showname') //localhost:3000/showname
  getName(): string {
    return this.appService.getName();
  }

  @Get('/showinformation') //localhost:3000/showinformation
  showInfo(): string {
    return this.appService.getInfo();
  }

  @Get('/showjson')
  getJSON() {
    return this.appService.getJSON();
  }

  @Get('/showtestGitandgithup')
  getGitandGithup() {
    return this.appService.getGitandGithup();
  }

  @Get('/usepostman')
  getPostman() {
    return this.appService.getPostman();
  }

  @Get()
  @Render('index')
  getHello() {
    return this.appService.getHello();
  }
}