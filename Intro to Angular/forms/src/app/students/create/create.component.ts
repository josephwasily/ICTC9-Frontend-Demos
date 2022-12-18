import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id: number =1;
  student: Student = {
    id: this.id,
    firstName: ''
  }
  students:Student[] = [];
  constructor(private studentsService: StudentsService, private router: Router){

  }
  ngOnInit(): void {
      this.students = this.studentsService.getStudents();
  }
  logForm(f: any){
    console.log(f);
  }
  submit(){
    this.student.id = this.id++;
    this.studentsService.addStudent({...this.student});
    //navigate
    this.router.navigate(['/']);
  }
}
