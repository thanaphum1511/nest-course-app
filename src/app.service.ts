import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      name: 'Night',
      email: 'Night@gmail.com',
      age: '99',
      hobby: 'sleep',
    };
  }
  getName(): string {
    return 'Thanaphum';
  }

  getInfo(): string {
    return 'Hello, I am Thanaphum, 19 years old';
  }

  getJSON() {
    return {
      name: 'Thanaphum',
      lastname: 'Laohabunjong',
      age: '19',
      version: process.env.API_VERSION,
    };
  }

  getGitandGithup() {
    return 'Git and Githup Using';
  }

  getPostman() {
    return 'we use postman';
  }
}