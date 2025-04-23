import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicshopDto } from './create-musicshop.dto';

export class UpdateMusicshopDto extends PartialType(CreateMusicshopDto) {}
