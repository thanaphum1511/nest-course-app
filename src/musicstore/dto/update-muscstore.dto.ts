import { PartialType } from "@nestjs/mapped-types";
import { CreateMusicstoreDto } from "./create-musicstore.dto";

export class UpdateMusicStoreDto extends PartialType(CreateMusicstoreDto) {
  music_name: string;
  price: number;
  is_new: boolean;
  brand: string;
}