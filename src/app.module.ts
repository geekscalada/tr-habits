import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dbUsername, dbPassword, IP } from 'privateVar/const';
import { HabitModule } from './habit/habit.module';
import { DayModule } from './day/day.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${dbUsername}:${dbPassword}@${IP}`,
      {dbName: 'tr-habits'}
    ),
    HabitModule,
    DayModule,
    JwtAuthModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
