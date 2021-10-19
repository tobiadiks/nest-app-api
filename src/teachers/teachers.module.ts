import { Module } from '@nestjs/common';
import { StudentTeachersController } from './student.controller';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  controllers: [TeachersController, StudentTeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
