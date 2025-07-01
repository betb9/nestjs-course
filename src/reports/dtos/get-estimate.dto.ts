import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  mileage: number;

  @Transform(({ value }) => Number(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => Number(value))
  @IsLatitude()
  lat: number;
}
