import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

const { port } = config.host;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap();
