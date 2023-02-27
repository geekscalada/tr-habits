import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './jwt-auth.service';
import { OAuth2Client } from 'google-auth-library';
import {GOOGLE_CLIENT_ID} from 'privateVar/const'
import { LoginAuthDto } from 'src/user/dto/loginAuth.dto';


const client = new OAuth2Client(
   process.env.GOOGLE_CLIENT_ID
);

@Controller('google-tojwt')
export class JwtAuthController {
  constructor(
    private readonly _jwtAuthService: AuthService,
    ) {}

    @Post()
    async login(@Body() { idToken }: { idToken: string }) {
      
      try {
        const ticket = await client.verifyIdToken({
          idToken,
          audience: GOOGLE_CLIENT_ID,
        });
  
        const payload = ticket.getPayload();
        const userId = payload.sub;

        const userDto : LoginAuthDto = { 
          email: payload.email,
          firstName: payload.given_name
        }

        let token = await this._jwtAuthService.loginGoogle(userDto);

        return token;



      } catch (error) {        
        throw new UnauthorizedException();
      }

      

      

    }

  
}