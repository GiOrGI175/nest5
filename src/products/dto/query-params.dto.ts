import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class QueryParamsDto {
  @ApiProperty({
    default: 30,
    required: false,
    example: 30,
  })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  take: number = 30;

  @ApiProperty({
    default: 1,
    required: false,
    example: 1,
  })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  page: number = 1;
}
