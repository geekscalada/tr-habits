import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-auth.strategy';
import { SECRET_JWT } from 'privateVar/const';
import { AuthService } from './jwt-auth.service';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { JwtAuthGuard } from './auth.guard';


@Module({
    providers: [JwtStrategy, JwtService, AuthService, UserService, JwtAuthGuard],
    imports: [
      JwtModule.register({
        secretOrPrivateKey: 'SECRET_JWT',
        signOptions: { expiresIn: '1w' },
      }),
      MongooseModule.forFeature([
        {
          name: User.name,
          schema: UserSchema
        }
      ])
    ],
    exports: [JwtService, AuthService, JwtModule, JwtAuthGuard]
    
})
export class JwtAuthModule {}



