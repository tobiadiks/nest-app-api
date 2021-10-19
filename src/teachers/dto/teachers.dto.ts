export class CreateTeacherDto {
  id: string;
  name: string;
}

export class TeacherResponseDto {
  id: string;
  name: string;
}

export class FindTeachersDto {
  id: string;
  name: string;
}

export class FindTeachersStudentDto {
  id: string;
  name: string;
  teacher: string;
}

export class TeacherStudentDto {
  id: string;
  name: string;
  teacher: string;
}

export class ModifyTeacherStudentDto {
  name: string;
  teacher: string;
}
