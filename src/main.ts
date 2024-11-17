import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable URI versioning with default version
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1', // Set default version
  });

  const config = new DocumentBuilder()
    .setTitle('NestJS API Sandbox')
    .setDescription('This is a sandbox to play with API endpoints')
    .setVersion('1.0')
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/swagger', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
