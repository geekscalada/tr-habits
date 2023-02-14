import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Habit, HabitDocument } from 'src/habit/schemas/habit.schema';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';
import { Day, DayDocument } from './schemas/day.schema';
import { HttpException } from '@nestjs/common';

@Injectable()
export class DayService {

  constructor (
    @InjectModel(Day.name) private dayModel : Model<DayDocument>, 
    @InjectModel(Habit.name) private habitModel : Model<HabitDocument> 
    
    )  {

  }

  // TODO: Create day type with "user" field. 
  async create(day: any) {

    const checkHabitUser = await this.habitModel.countDocuments(
      {
        user: day.user, 
        _id: { $in: day.completedHabits }
      }).then((count) => {        

        if (count === day.completedHabits.length) {
          // Todos los elementos de completedHabits pertenecen al usuario
          return true
        } else {
          // Alguno de los elementos de completedHabits no pertenece al usuario
          return false
        }

      });

    console.log(checkHabitUser);

    if (!checkHabitUser) {
      throw new HttpException('Habit not found', 404);
    }

    const createdDay = await this.dayModel.create(day);

    return createdDay;
  }

  findAll(user) {
    
    return this.dayModel.find({user: user}).populate("completedHabits"); 
   
  }

// ------------------------------------------
// ------------------------------------------


  // TODO: develop if needed
  async findOne(id: string) {
    const day = await (await this.dayModel.findById(id)).populate("completedHabits"); 
    return day;
  }

  update(id: number, updateDayDto: UpdateDayDto) {
    return `This action updates a #${id} day`;
  }

  remove(id: number) {
    return `This action removes a #${id} day`;
  }
}
