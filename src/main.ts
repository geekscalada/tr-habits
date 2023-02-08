import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Tracker habits API')
    .setDescription('Backend for APP')
    .setVersion('1.0')
    .addTag('Tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  // You need to declare use of PIPES for all app (for example for use in DTO)
  app.useGlobalPipes(new ValidationPipe());
      
  await app.listen(3000);
}
bootstrap();