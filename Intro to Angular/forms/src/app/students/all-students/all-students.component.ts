import { StudentsService } from './../students.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  
  students: Student[]=[];
  displayedColumns:string[] = ['id', 'firstName', 'lastName', 'age', 'gender', 'actions'];
  constructor(private studentsService: StudentsService, public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.students  = this.studentsService.getStudents();
  }

  deleteStudent(id: number){
   console.log(id);
   let dialogRef = this.dialog.open(DeleteComponent, {
      width: '500px',
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe((result)=> {
        console.log(result); 

        //refresh table 
        this.students = this.studentsService.getStudents();
    })

  }

}
