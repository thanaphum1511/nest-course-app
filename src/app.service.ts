import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS';
  }

  getName(): string {
    return 'Thanaphum Laohabunjong';
  }

  getInfo(): string {
    return 'Hello, I am Thanaphum Laohabunjong, 19 years old';
  }

  getJSON(){
    return{
      name: 'thanaphum',
      lastname: 'laohabunjong',
      age: '19',
    };
  }

  getGitandGithup(){
    return 'Git and Githup Using';
  }

  getPostman(){
    return 'we use postman';
  }
}
