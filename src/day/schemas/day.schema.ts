import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { HydratedDocument } from "mongoose";
import { Habit } from 'src/habit/schemas/habit.schema';


export type DayDocument = HydratedDocument<Day>;


@Schema()
export class Day {

@Prop()
time: Date;

@Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Habit.name }],
  })
@Type(() => Habit)
completedHabits: Habit[];

}

export const  DaySchema = SchemaFactory.createForClass(Day);


