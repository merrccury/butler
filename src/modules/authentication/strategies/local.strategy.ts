import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { IAuthenticationService, IUser } from '../interfaces';
import { Tokens } from '../../../common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(Tokens.AuthenticationService)
    private authenticationService: IAuthenticationService,
  ) {
    super();
  }

  validate = (email: string, password: string): Promise<IUser> => {
    console.log({ email, password });
    return this.authenticationService.validateUser(email, password);
  };
}
