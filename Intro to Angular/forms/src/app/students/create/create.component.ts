import { StudentsAsyncService } from './../students-async.service';
import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import {interval, filter, map} from 'rxjs'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  student: Student = {
    firstName: ''
  }
  students:Student[] = [];
  constructor(private studentsService: StudentsAsyncService, private router: Router){

  }
  ngOnInit(): void {
    this.studentsService.getStudents().subscribe((response)=> {
      this.students = response;
    });

    interval(1000)
    .pipe(
      filter((value)=> value % 2 == 0), //observable
      map((value)=> 'the number is '+value),

    ).subscribe((value)=> { 
       
          console.log(value);
       
    })  
    
  //this.students =
  }
  logForm(f: any){
    console.log(f);
  }
  submit(){
    //this.student.id = this.id++;
    this.studentsService.addStudent({...this.student}).subscribe({
    next: (response)=> {
      this.router.navigate(['/']);  
    },
    error: (error)=> {
      alert(JSON.stringify(error));
    },
    complete: ()=> console.log('completed')
  });
    //navigate
  }
}
