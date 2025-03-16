import { Body, Controller, HttpCode, Post, UseGuards, Request, Get, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/regist')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    await this.authService.register(registerDto);
    return {
      message: 'register Complete',
    };
  }
  @Post('/login')
    async Login(@Body() loginDto: LoginDto){
      return await this.authService.login(loginDto);
    }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req: any){
   return await this.authService.getUsertProflie(Number(req.user.user_id));
  }
}
