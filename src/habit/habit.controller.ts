import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitService } from './habit.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('habit')
@ApiTags('Habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Post()
  create(@Body() createHabitDto: CreateHabitDto) {
    return this.habitService.create(createHabitDto);
  }

  
  @Get()
  findAll() {
    return this.habitService.findAll();
  }

  //TODO: develop (all) this methods
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitService.update(+id, updateHabitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitService.remove(+id);
  }
}
