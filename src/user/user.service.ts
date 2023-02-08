import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  
  constructor (@InjectModel(User.name) private userModel : Model<UserDocument> )  {

  }
      
  async login(createUserDto: CreateUserDto) {


    const createdUser = await this.userModel.create(createUserDto);

    console.log(createdUser)

    return 'This action adds a new user';

  }

  
}






