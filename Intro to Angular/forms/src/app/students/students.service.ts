import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Student[] =[
    {
      id: 1, 
      firstName: 'joseph',
      lastName: 'botros',
      age: 30,
      gender:'Male'
    }

  ];
  id: number = 1;
  constructor() { }

  addStudent(student: Student){
    this.id++;
    student.id = this.id;
    this.students.push(student); 
    //json-server 
    //firebase 
  }
  getStudents(): Student[]{
    return this.students;
  }
  getStudentById(id: number): Student{
      return this.students.filter((val)=> val.id == id)[0];
  }
  updateStudent(id: number, student: Student){
      console.log(student.id);
      debugger;
      let existingStudent = this.getStudentById(id);
      existingStudent.firstName = student.firstName;
      existingStudent.lastName = student.lastName;
      existingStudent.age = student.age;
      existingStudent.gender = student.gender;

      console.log(existingStudent, 'student after update');
  }
  deleteStudent(id: number){
      this.students = this.students.filter((val)=> val.id != id);
  }
}
