import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-auth.strategy';
import { JWT_SECRET } from 'privateVar/const';
import { AuthService } from './jwt-auth.service';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { JwtAuthGuard } from './auth.guard';
import { JwtAuthController } from './jwt-auth.controller';



@Module({
    providers: [JwtStrategy, AuthService, UserService, JwtAuthGuard],
    imports: [
      JwtModule.register({
        secret: JWT_SECRET,
        signOptions: { expiresIn: '1w' },
      }),
      MongooseModule.forFeature([
        {
          name: User.name,
          schema: UserSchema
        }
      ])
    ],
    exports: [ AuthService, JwtModule, JwtAuthGuard],
    controllers: [JwtAuthController]
    
})
export class JwtAuthModule {}



