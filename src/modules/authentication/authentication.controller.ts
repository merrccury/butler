import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { IAuthenticationService, IUser, IUserService } from './interfaces';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { Tokens } from '../../common';

@Controller('auth')
export class AuthenticationController {
  constructor(
    @Inject(Tokens.AuthenticationService)
    private authenticationService: IAuthenticationService,
    @Inject(Tokens.UserService)
    private userService: IUserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authenticationService.login(req.user);
  }

  @Post('signup')
  async signup(@Body() body: Omit<IUser, 'id'>) {
    return this.authenticationService.signup(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  async test(@Request() req: any) {
    return {
      user: req.user,
      type: 'test',
    };
  }
}
