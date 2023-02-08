import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dbUsername, dbPassword, IP } from 'privateVar/const';
import { HabitModule } from './habit/habit.module';
import { DayModule } from './day/day.module';
import { GoogleAuthModule } from './google-auth/google-auth.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${dbUsername}:${dbPassword}@${IP}`,
      {dbName: 'tr-habits'}
    ),
    HabitModule,
    DayModule,
    GoogleAuthModule,    
    AuthModule, JwtAuthModule    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
