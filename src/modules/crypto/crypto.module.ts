import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { Tokens } from '../../common';

@Module({
  providers: [
    {
      useClass: CryptoService,
      provide: Tokens.CryptoService,
    },
  ],
  exports: [
    {
      useClass: CryptoService,
      provide: Tokens.CryptoService,
    },
  ],
})
export class CryptoModule {}
