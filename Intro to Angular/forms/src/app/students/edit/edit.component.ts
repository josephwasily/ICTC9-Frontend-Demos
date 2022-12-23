import { switchMap, Observable } from 'rxjs';
import { StudentsFirebaseService } from './../students-firebase.service';
import { StudentsService } from './../students.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  student?: Student;
  student$!: Observable<Student | undefined>;
  id!: string;
  constructor(private route: ActivatedRoute, 
    private studentService: StudentsFirebaseService,
    private router: Router){

    // this.route.paramMap.subscribe((response)=> {
    //      this.id = response.get('id');
    //      //get students 
    //      this.student = { ... this.studentService.getStudentById(this.id)};


    // });

    this.student$ = this.route.paramMap.pipe(

      switchMap((value)=> {
        this.id = value.get('id')+'';
        return this.studentService.getStudentById(this.id)
      
      }

      )
    )
    
  }
  editStudent(student: any){
    console.log(student,'on edit student');
    this.studentService.updateStudent(this.id, student);
    this.router.navigate(['/']);
  }

}
