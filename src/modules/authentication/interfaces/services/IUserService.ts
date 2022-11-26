import { IUser } from '../models';
import { UserRole } from '../../../../common';

export interface IUserService {
  getUserByEmailOrUsername(alias: string): Promise<IUser | null>;

  getUserById(id: string): Promise<IUser | null>;

  addUser(
    username: string,
    hash: string,
    role: UserRole,
    email?: string,
  ): Promise<IUser>;
}
