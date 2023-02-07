import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ftruncate } from 'fs';
import { Model } from 'mongoose';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';
import { Day, DayDocument } from './schemas/day.schema';

@Injectable()
export class DayService {

  constructor (@InjectModel(Day.name) private dayModel : Model<DayDocument> )  {

  }

  async create(createDayDto: CreateDayDto) {    
    const createdDay = await this.dayModel.create(createDayDto);
    console.log(createDayDto)
    return createdDay;
  }

  findAll() {
    return `This action returns all day`;
  }

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
