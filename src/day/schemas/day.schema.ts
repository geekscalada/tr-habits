import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { HydratedDocument } from "mongoose";
import { Habit } from 'src/habit/schemas/habit.schema';
import { User } from 'src/user/schemas/user.schema';


export type DayDocument = HydratedDocument<Day>;


@Schema()
export class Day {

@Prop()
time: Date;


// We need array and this type of notation because we have a many-to-many relationship
@Prop({  
  type: [{ type: mongoose.Schema.Types.ObjectId, ref: Habit.name}]
})
@Type(() => Habit)
completedHabits: Habit[];

// One-to-many relationship
// We don't use  @Prop({  type: [{ 
@Prop({
  type: mongoose.Schema.Types.ObjectId, ref: User.name
})
@Type(() => User)
user: User;

}

export const  DaySchema = SchemaFactory.createForClass(Day);


