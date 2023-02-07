import { Module } from '@nestjs/common';
import { DayService } from './day.service';
import { DayController } from './day.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Day, DaySchema } from './schemas/day.schema';

@Module({
  controllers: [DayController],
  providers: [DayService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Day.name,
        schema: DaySchema
      }
    ])
  ]
})
export class DayModule { }
