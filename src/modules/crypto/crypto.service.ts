import { Injectable } from '@nestjs/common';
import { ICryptoService } from '../../common';

@Injectable()
export class CryptoService implements ICryptoService {
  hashPassword(password: string): Promise<string> {
    return Promise.resolve(password);
  }

  validatePassword(hash: string, password: string): Promise<boolean> {
    return Promise.resolve(hash === password);
  }
}
