import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport'; 
import { Injectable } from '@nestjs/common';
import { JWT_SECRET } from 'privateVar/const';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
        //This function extract token from the header automatically
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,

      // Seed to know if the token is created by the server
      secretOrKey: JWT_SECRET
    });
    
  }

  // This function is called when the token is validated
  // TODO: DTO implementation for payload.

  async validate(payload: any) {    

    console.log(payload)
    
    return { userId: payload.userId, email: payload.email };
  }
}