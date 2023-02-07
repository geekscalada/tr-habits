import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateHabitDto } from './create-habit.dto';

export class UpdateHabitDto extends PartialType(CreateHabitDto) {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(20, {
        message: 'Name is larger than 20 characters',
    })
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100, {
        message: 'Description is larger than 100 characters',
    })
    description: string

    
}
