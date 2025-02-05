import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    example: 'levan@gaml.vom',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'levan12345',
    minLength: 6,
    maxLength: 20,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
