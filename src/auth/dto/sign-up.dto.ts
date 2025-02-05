import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    example: 'levan liparteniani',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
