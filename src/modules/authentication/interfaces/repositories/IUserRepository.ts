import { IUser } from '../models';
import { UserRole } from '../../../../common';

export interface IUserRepository {
  getUserById(id: string): Promise<IUser | null>;

  addUser(
    username: string,
    hash: string,
    role: UserRole,
    email?: string,
  ): Promise<IUser>;

  getUserByEmailOrUsername(alias: string): Promise<IUser | null>;
}
