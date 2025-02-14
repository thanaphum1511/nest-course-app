import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showname') //localhost:3000/showname
  getName(): string {
    return this.appService.getName();
  }


  @Get('/showinformation')//localhost:3000/showinformation
  showInfo(): string {
    return this.appService.getInfo();
  }

  @Get('/showjson')
  getJSON() {
    return this.appService.getJSON();
  }

}
