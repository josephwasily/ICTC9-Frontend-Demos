import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsAsyncService {
  baseUrl:string =  'http://localhost:3000/students'
  constructor(private http: HttpClient) { }

  addStudent(student: Student){
    console.log(student);
    return this.http.post<Student>(this.baseUrl, student);
   
    //json-server 
    //firebase 
  }
  getStudents(): Observable<Student[]>{
      // return fetch('https://localhost:3000/students').then((response)=> response.json()).then((json)=> json as Student[])
      return this.http.get<Student[]>(this.baseUrl);
  }
  getStudentById(id : number){
    return this.http.get<Student>(this.baseUrl+'/'+id);
  }
  deleteStudent(id: number){
    return this.http.delete(this.baseUrl+'/'+id);
  }
  updateStudent(id: number, student: Student){
   return this.deleteStudent(id).pipe( ()=> {
     return this.addStudent(student);
   });
}
}
