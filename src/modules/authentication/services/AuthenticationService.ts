import { IAuthenticationService, IUser, IUserService } from '../interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { ICryptoService, Tokens } from '../../../common';

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  constructor(
    @Inject(Tokens.UserService) private readonly userService: IUserService,
    @Inject(Tokens.CryptoService)
    private readonly cryptoService: ICryptoService,
  ) {}

  login(user: IUser): Promise<IUser> {
    // todo fix
    return Promise.resolve(user);
  }

  async signup(userPayload: Omit<IUser, 'id'>): Promise<IUser> {
    const hash = await this.cryptoService.hashPassword(userPayload.password);
    const { username, role, email } = userPayload;
    return this.userService.addUser(username, hash, role, email);
  }

  async validateUser(username: string, password: string): Promise<IUser> {
    const targetUser = await this.userService.getUserByEmailOrUsername(
      username,
    );
    console.log({ targetUser });
    if (targetUser === null) {
      throw new Error('User not found');
    }
    console.log({ password, p: targetUser.password });
    const isPasswordMatch = await this.cryptoService.validatePassword(
      targetUser.password,
      password,
    );
    if (!isPasswordMatch) {
      throw new Error('Incorrect password');
    }
    return targetUser;
  }
}
