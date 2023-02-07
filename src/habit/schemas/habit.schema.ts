import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type HabitDocument = HydratedDocument<Habit>;


// Decorator schema gives to this class properties to interact with Database
// find, dindBy etc. 
  @Schema()
  export class Habit {
  
  @Prop()  
  // @Prop({unique : true})
  name: string;  

  @Prop()
  description: string;
}

export const HabitSchema = SchemaFactory.createForClass(Habit);