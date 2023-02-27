import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthService } from '../google-auth-service/google-auth.service';

@Controller('google')
export class GoogleAuthController {
  constructor(private readonly _googleAuthService: GoogleAuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {

    

    console.log("res" , res)    
    return this._googleAuthService.googleLogin(req)

  }

  


}