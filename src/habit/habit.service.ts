import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit, HabitDocument } from './schemas/habit.schema';

@Injectable()
export class HabitService {


  constructor (@InjectModel(Habit.name) private habitModel : Model<HabitDocument>) {

  }
  
  async create(createHabitDto: CreateHabitDto) {

    console.log(createHabitDto);

    const createdHabit = await this.habitModel.create(createHabitDto)
    return `This action adds a new Habit, reference ${createdHabit}`;
  }

  async findAll(userId) {
    const getHabits = await this.habitModel.find({user : userId});    
    return getHabits;
  }

 


  // TODO: DEVELOP!
  findOne(id: number) {
    return `This action returns a #${id} habit`;
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}
