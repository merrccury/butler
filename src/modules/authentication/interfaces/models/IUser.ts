import { UserRole } from '../../../../common';
import { Document } from 'mongodb';

export interface IUser {
  role: UserRole;
  email?: string;
  username: string;
  password: string;
  id: string;
}

export type UserDocument = IUser & Document;
