import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid } from 'uuid';
import {
  CreateStudentDto,
  FindStudentsDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/students.dto';

@Injectable()
export class StudentsService {
  private students = students;
  getStudents(): FindStudentsDto[] {
    return this.students;
  }

  getStudentById(studentId: string): StudentResponseDto {
    return this.students.find((students) => {
      return students.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudentById(
    payload: UpdateStudentDto,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;
    let updatedStudentList = this.students.map((students) => {
      if (students.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        students = { ...updatedStudent };
        return students;
      } else return students;
    });

    this.students = updatedStudentList;
    return updatedStudent;
  }
}
