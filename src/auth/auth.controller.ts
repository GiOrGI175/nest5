import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { IsAuthGuard } from './auth.guard';
import {
  ApiBadGatewayResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    schema: {
      example: 'user register succesfully',
    },
  })
  @ApiBadRequestResponse({
    schema: {
      example: 'bad req',
    },
  })
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @ApiBadRequestResponse({
    schema: {
      example: 'email ore passworld is invalid',
    },
  })
  @ApiCreatedResponse({
    example: {
      accessToken:
        'djfnjdfnnnnnnnnnnnnndjfnjddfnnnnnnnnnnnnndjfnjddfnnnnnnnnnnnnndjfnjddfnnnnnnnnnnnnndjfnjdnfjdnfdjfnjdoseeeeeeeeeewfdkkkkkknewf',
    },
  })
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signin(signInDto);
  }

  @Get('current-user')
  @UseGuards(IsAuthGuard)
  getCurrentUser(@Req() req) {
    return this.authService.getCurrentUser(req.userId);
  }
}
