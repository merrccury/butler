import { IUser, IUserRepository, UserDocument } from '../interfaces';
import { Repository } from './Repository';
import { Inject, Injectable } from '@nestjs/common';
import { Tokens, UserRole } from '../../../common';
import { Db } from 'mongodb';
import { randomUUID } from 'crypto';

@Injectable()
export class UserRepository
  extends Repository<UserDocument>
  implements IUserRepository
{
  constructor(@Inject(Tokens.DataSource) connection: Db) {
    super('users', connection);
  }

  getUserById(id: string): Promise<IUser | null> {
    return this.repository.findOne({ id });
  }

  async addUser(
    username: string,
    password: string,
    role: UserRole,
    email?: string,
  ): Promise<IUser> {
    const user: IUser = {
      username,
      password,
      role,
      email,
      id: randomUUID(),
    };
    await this.repository.insertOne(user);
    return user;
  }

  getUserByEmailOrUsername(alias: string): Promise<IUser | null> {
    return this.repository.findOne({
      $or: [{ email: alias }, { username: alias }],
    });
  }
}
