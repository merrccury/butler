import { IUser } from '../models';

export interface IAuthenticationService {
  validateUser(username: string, password: string): Promise<IUser>;

  login(user: IUser): Promise<IUser>;

  signup(userPayload: Omit<IUser, 'id'>): Promise<IUser>;
}
