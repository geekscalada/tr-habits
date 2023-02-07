import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateHabitDto {

    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(20, {
        message: 'Name is larger than 20 characters',
    })
    name: string;

    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100, {
        message: 'Description is larger than 100 characters',
    })
    description: string
    

}



