import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';

import { UserService } from 'src/user/user.service';
import { GoogleAuthController } from './google-auth-controller/google-auth.controller';
import { GoogleAuthService } from './google-auth-service/google-auth.service';
import { GoogleStrategy } from './google.strategy';



// TODO: Import auth-jwt instead of userSchemas?
@Module({
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService, GoogleStrategy, UserService],
  imports: [MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema
    }
  ])]
})
export class GoogleAuthModule {}
