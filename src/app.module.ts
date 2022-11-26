import { Module } from '@nestjs/common';
import { AuthenticationModule } from './modules';

@Module({
  imports: [AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
