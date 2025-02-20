import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {UtilityModule} from 'src/shared/utility/utility.module';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [UtilityModule],
  providers: [UserService],
})
export class UserModule {}
