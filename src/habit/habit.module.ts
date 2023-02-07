import { Module } from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitController } from './habit.controller';
import { Habit, HabitSchema } from './schemas/habit.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [HabitController],
  providers: [HabitService],
  imports: [MongooseModule.forFeature([
    {
    name: Habit.name ,
    schema: HabitSchema
  }
])] 
})
export class HabitModule {}
