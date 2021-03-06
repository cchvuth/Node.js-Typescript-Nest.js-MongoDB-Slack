import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.use(compression());
  await app.listen(3000);
}
bootstrap();
