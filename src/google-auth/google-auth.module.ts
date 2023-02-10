import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthModule } from 'src/jwt-auth/jwt-auth.module';
import { AuthService } from 'src/jwt-auth/jwt-auth.service';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { GoogleAuthController } from './google-auth-controller/google-auth.controller';
import { GoogleAuthService } from './google-auth-service/google-auth.service';
import { GoogleStrategy } from './google.strategy';



// TODO: Import auth-jwt instead of userSchemas?
@Module({
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService, GoogleStrategy],
  imports: [JwtAuthModule]
  
})

export class GoogleAuthModule {}
