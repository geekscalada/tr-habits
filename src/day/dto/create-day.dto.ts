import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsMongoId, isMongoId, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Habit } from "src/habit/schemas/habit.schema";

export class CreateDayDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()    
    time: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId({each: true})
    completedHabits: string[];

}

