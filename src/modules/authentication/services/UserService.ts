import { Inject, Injectable } from '@nestjs/common';
import { Tokens, UserRole } from '../../../common';
import { IUser, IUserRepository, IUserService } from '../interfaces';

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(Tokens.UserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  private readonly userRepository: IUserRepository;

  getUserById(id: string): Promise<IUser | null> {
    return this.userRepository.getUserById(id);
  }

  addUser(
    username: string,
    hash: string,
    role: UserRole,
    email?: string,
  ): Promise<IUser> {
    return this.userRepository.addUser(username, hash, role, email);
  }

  getUserByEmailOrUsername(alias: string): Promise<IUser | null> {
    return this.userRepository.getUserByEmailOrUsername(alias);
  }
}
