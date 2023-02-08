
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;


@Schema()
export class User {

    @Prop()
    name: String;

    @Prop()
    email: String;    

}

export const UserSchema = SchemaFactory.createForClass(User);
