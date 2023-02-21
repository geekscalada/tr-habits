import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { HabitService } from './habit.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/jwt-auth/auth.guard';
import {Request,Response,NextFunction} from "express";

@Controller('habit')
@ApiTags('Habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHabitDto: CreateHabitDto, @Req() req: any) {
    
    const habit = {
      ...createHabitDto,
      user: req.user.userId
    }

    return this.habitService.create(habit);
  }


  @ApiBearerAuth()
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: any) {

    return this.habitService.findAll(req.user.userId);
  }



  //TODO: develop (all) this methods
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.habitService.findOne(+id);
  //}

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
  //   return this.habitService.update(+id, updateHabitDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.habitService.remove(+id);
  // }

}


//TODO: check all controllers to make some of them only ADMIN controlles. 
// TODO: check all the controllers to make searching with Id of user in token.