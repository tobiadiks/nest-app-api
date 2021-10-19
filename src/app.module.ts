import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/students.controller';
import { TeachersController } from './teachers/teachers.controller';
import { StudentTeachersController } from './teachers/student.controller';
import { StudentsService } from './students/students.service';
import { TeachersService } from './teachers/teachers.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    StudentsController,
    TeachersController,
    StudentTeachersController,
  ],
  providers: [AppService, StudentsService, TeachersService],
})
export class AppModule {}
