
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GoogleAuthService {
  
  constructor(private readonly userService : UserService) {}
  
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }

  return this.userService.login(req.user)

    // return {
    //   message: 'User information from google',
    //   user: req.user      
    // }
  }
}