import { StudentsService } from './../students.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  student?: Student;
  id?: number;
  constructor(private route: ActivatedRoute, 
    private studentService: StudentsService,
    private router: Router){

    this.route.paramMap.subscribe((response)=> {
         this.id = Number(response.get('id'));
         //get students 
         this.student = { ... this.studentService.getStudentById(this.id)};


    });
    
  }
  editStudent(student: any){
    console.log(student,'on edit student');
    this.studentService.updateStudent(Number(this.id), student);
    this.router.navigate(['/']);
  }

}
