import { Module } from '@nestjs/common';
import { DayService } from './day.service';
import { DayController } from './day.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Day, DaySchema } from './schemas/day.schema';
import { Habit, HabitSchema } from 'src/habit/schemas/habit.schema';

@Module({
  controllers: [DayController],
  providers: [DayService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Day.name,
        schema: DaySchema
      }
    ]),
    MongooseModule.forFeature([
      {
        name: Habit.name,
        schema: HabitSchema
      }
    ])
  ]
})
export class DayModule { }
