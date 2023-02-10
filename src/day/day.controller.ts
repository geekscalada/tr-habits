import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/jwt-auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Console } from 'console';
import { DayService } from './day.service';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';

@Controller('day')
@ApiTags('Day')
export class DayController {
  constructor(private readonly dayService: DayService) { }

  @Post()
  create(@Body() createDayDto: CreateDayDto) {
    return this.dayService.create(createDayDto);
  }

  // TODO: develop for all days of an User
  @Get()
  findAll() {
    return this.dayService.findAll();
  }
  
  // This decorator makes controller to get bearer token from swagger
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param() id: string, @Body() body: any) {
    
    
    try {
      //TODO: this validation of another way
      if (/"+/g.test(id)) {           
        throw new Error("El ID ha de enviarse sin formato de string")
      } else {
        return this.dayService.findOne(id);
      }     

    } catch (error) {
      //TODO: CAPTURE ERRORS OF ANOTHER WAY
      console.log(error)
    }
  }

  // TODO:
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDayDto: UpdateDayDto) {
    return this.dayService.update(+id, updateDayDto);
  }

  // TODO:
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dayService.remove(+id);
  }
}
