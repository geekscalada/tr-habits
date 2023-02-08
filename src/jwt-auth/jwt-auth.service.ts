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


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly _jwtService: JwtService    
    
    ) {

  }

//   async register(userObject: RegisterAuthDto) {
//     const {password} =  userObject;
//     const passHashed = await hash(password, 10) //salt
    
//     // TODO: generate salt randomly for ejample:
//     // let mySalt = generateSalt(8);
//     // await hash(password, mySalt)

//     userObject = {...userObject, password:passHashed};

//     return this.userModel.create(userObject);    
    
//   }

  async login(userObjectLogin: LoginAuthDto) {
    
    const {email, name} = userObjectLogin

    // Sugar sintax email: email on the .findOne
    const findUser = await this.userModel.findOne({email})
    

    // TODO: Create a user when user doesn't exist
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)   
   

    
    const payload = {email, name}

    // We sign payload
    // Automatically it adds iat (time of creation) and time of expiration
    const accesToken = this._jwtService.sign(payload)    

    return accesToken;
  }
}