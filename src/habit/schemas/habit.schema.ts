import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type HabitDocument = HydratedDocument<Habit>;


// Decorator schema gives to this class properties to interact with Database
// find, findBy etc. 
  @Schema()
  export class Habit {
  
  @Prop()  
  // @Prop({unique : true})
  name: string;  

  @Prop()
  description: string;
 
  @Prop({
    type: mongoose.Schema.Types.ObjectId, ref: User.name
  })
  @Type(() => User)
  user: User;
}

export const HabitSchema = SchemaFactory.createForClass(Habit);