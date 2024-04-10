import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { MongoExceptionsFilter } from './tools/filters/mongo-exceptions/mongo-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalFilters(new MongoExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle('API Specs')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
  Logger.verbose(
    `Application running at ${await app.getUrl()}`,
    'bootstrap function',
  );
}

bootstrap();
