import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {

  //TODO: Make a more strict CORS configuration
  const corsConfiguration = {

    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204

  }

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tracker habits API')
    .setDescription('Backend for APP')
    .setVersion('1.0')
    .addTag('Tag')
    .addBearerAuth() // This is for use Bearer token in Swagger
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // You need to declare use of PIPES for all app (for example for use in DTO)
  app
    .useGlobalPipes(new ValidationPipe())
    .enableCors(
      corsConfiguration
    )



  // Configurar middleware de cookie-parser
  app.use(cookieParser());

  await app.listen(3000);
}

bootstrap();


// TODO: Do guards to implement login and logout
// TODO: Generate refresh token
// TODO: Generate good front-end for the month view and thinking
// about data wich has to be viewed (and how)
// TODO: Make improvements into controller get day/id to get the day or user that is loginIn
// TODO: implement class Request for better practices.

