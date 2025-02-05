import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'aple',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 30,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
