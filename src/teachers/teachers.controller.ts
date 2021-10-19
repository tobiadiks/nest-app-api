import { Controller, Get, Param } from '@nestjs/common';
import { FindTeachersDto, TeacherResponseDto } from './dto/teachers.dto';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}
  @Get()
  getTeachers(): FindTeachersDto[] {
    return this.teachersService.getTeachers();
  }

  @Get(':teacherId')
  getTeacherById(@Param('teacherId') teacherId: string): TeacherResponseDto {
    return this.teachersService.getTeacherById(teacherId);
  }
}
