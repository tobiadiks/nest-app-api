import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/students.dto';
import { StudentsService } from './students.service';
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get()
  getStudents(): FindStudentsDto[] {
    return this.studentsService.getStudents();
  }

  @Get(':studentId')
  getStudentById(@Param('studentId') studentId: string): StudentResponseDto {
    return this.studentsService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.studentsService.createStudent(body);
  }

  @Put(':studentId')
  updateStudentById(
    @Body() body: UpdateStudentDto,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return this.studentsService.updateStudentById(body, studentId);
  }
}
