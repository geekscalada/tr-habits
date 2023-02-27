import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from 'src/user/dto/loginAuth.dto';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {

  constructor(
    // @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly _jwtService: JwtService,
    private readonly userService: UserService    
    
    ) {

  }  

  async loginGoogle(userObjectLogin: LoginAuthDto) {   

    const {email, firstName } = userObjectLogin
    
    const findUser = await this.userService.findIfRegister(email);
        
    let userId = null;  

    
    if (!findUser) {
      const createdUser = await this.userService.createUser(userObjectLogin);
      console.log(createdUser);
      userId = createdUser._id; 

    } else {
      userId = findUser._id; 
    }    
    
    const payload = { email, firstName, userId }

    // We sign payload
    // Automatically it adds iat (time of creation) and time of expiration   
    
    const accessToken = this._jwtService.sign(payload)    

    return {accessToken}
  }
}