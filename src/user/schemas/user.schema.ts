
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from "mongoose";
import { Habit } from 'src/habit/schemas/habit.schema';


export type UserDocument = HydratedDocument<User>;


@Schema()
export class User {

    @Prop()
    name: String;

    @Prop()
    email: String;
    
    // @Prop()
    // habits: Habit[];
    //habits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Habit' }];

}

export const UserSchema = SchemaFactory.createForClass(User);
