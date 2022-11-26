export interface ICryptoService {
  hashPassword(password: string): Promise<string>;

  validatePassword(hash: string, password: string): Promise<boolean>;
}
