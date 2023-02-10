import { HttpException, Injectable } from '@nestjs/common';
// import { LoginAuthDto } from './dto/login-auth-dto/login-auth-dto'; 
// import { RegisterAuthDto } from './dto/register-auth-dto/register-auth-dto';
// import { hash, compare } from 'bcrypt'
// import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
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

    console.log("us" ,userObjectLogin);
    

    const {email, firstName } = userObjectLogin
    
    const findUser = await this.userService.findIfRegister(email);

    let userId = findUser._id;

    // TODO: Make secret key more secure
    // Make secret global through module
    const secretKey = 'SECRET_JWT'    
       

    
    if (!findUser) {
      const createdUser = await this.userService.createUser(userObjectLogin);
      console.log(createdUser);
      userId = createdUser._id; 

    }     
    
    const payload = { email, firstName, userId }



    // We sign payload
    // Automatically it adds iat (time of creation) and time of expiration   
    
    const accesToken = this._jwtService.sign(payload, { secret: secretKey });   

    return {"accesToken" : accesToken}
  }



}