import { Module } from '@nestjs/common';
import { AuthenticationService } from './services';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy, LocalStrategy } from './strategies';
import { jwtConstants } from './secrets';
import { AuthenticationController } from './authentication.controller';
import { DatabaseModule } from '../database';
import { Tokens } from '../../common';
import { UserRepository } from './repositories';
import { UserService } from './services/UserService';
import { CryptoModule } from '../crypto';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    CryptoModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    {
      provide: Tokens.AuthenticationService,
      useClass: AuthenticationService,
    },
    {
      provide: Tokens.UserRepository,
      useClass: UserRepository,
    },
    {
      provide: Tokens.UserService,
      useClass: UserService,
    },
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthenticationModule {}
