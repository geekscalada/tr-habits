import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { dbUsernarme, dbPassword, IP } from 'privateVar/const';
import { HabitModule } from './habit/habit.module';
import { DayModule } from './day/day.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${dbUsernarme}:${dbPassword}@${IP}`,
      {dbName: 'tr-habits'}
    ),
    HabitModule,
    DayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
