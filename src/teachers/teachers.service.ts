import { Injectable } from '@nestjs/common';
import { teachers, students } from 'src/db';
import {
  FindTeachersDto,
  FindTeachersStudentDto,
  ModifyTeacherStudentDto,
  TeacherResponseDto,
  TeacherStudentDto,
} from './dto/teachers.dto';

@Injectable()
export class TeachersService {
  private teachers = teachers;
  private students = students;
  getTeachers(): FindTeachersDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): TeacherResponseDto {
    return this.teachers.find((teachers) => {
      return teachers.id === teacherId;
    });
  }

  getStudentsByTeacherId(teacherId: string): FindTeachersStudentDto[] {
    return this.students.filter((students) => {
      return students.teacher === teacherId;
    });
  }
  updateStudentTeacherById(
    studentId: string,
    teacherId: string,
    payload: ModifyTeacherStudentDto,
  ): TeacherStudentDto {
    let updatedStudent: TeacherStudentDto;
    let updatedTeacherStudentList = this.students.map((students) => {
      if (students.id === studentId && students.teacher === teacherId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        students = { ...updatedStudent };
        return students;
      } else return students;
    });

    this.students = updatedTeacherStudentList;

    return updatedStudent;
  }
}
