import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/jwt-auth/jwt-auth.service';


@Injectable()
export class GoogleAuthService {
  
  constructor(
    
    private readonly authService : AuthService,
    
    
    
    
    ) {}
  
  googleLogin(req) {
    
    if (!req.user) {
      return 'No user from google'
    } 
    
    return this.authService.loginGoogle(req.user);
  }
}