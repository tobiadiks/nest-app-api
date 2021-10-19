import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { FindTeachersStudentDto, TeacherStudentDto } from './dto/teachers.dto';
import { TeachersService } from './teachers.service';

@Controller('teachers/:teacherId/students')
export class StudentTeachersController {
  constructor(private readonly teachersService: TeachersService) {}
  @Get()
  getStudentsByTeacherId(
    @Param('teacherId') teacherId: string,
  ): FindTeachersStudentDto[] {
    return this.teachersService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacherById(
    @Body() payload: TeacherStudentDto,
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): TeacherStudentDto {
    return this.teachersService.updateStudentTeacherById(
      studentId,
      teacherId,
      payload,
    );
  }
}
