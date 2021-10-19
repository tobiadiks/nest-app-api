export class CreateStudentDto {
  name: string;
  teacher: string;
}

export class UpdateStudentDto {
  id: string;
  name: string;
  teacher: string;
}

export class FindStudentsDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}
