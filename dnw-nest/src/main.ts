import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prefix = "/api";
  app.setGlobalPrefix(prefix);
  await app.init();
  await app.listen(8000);
}
bootstrap();
