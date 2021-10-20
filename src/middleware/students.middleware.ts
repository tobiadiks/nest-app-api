import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { students } from '../db';

@Injectable()
export class StudentsMiddleware implements NestMiddleware {
  private students = students;
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = this.students.some((s) => {
      return s.id === req.params.studentId;
    });
    if (!studentId) {
      throw new HttpException('Student not found', 400);
    }
    next();
  }
}
