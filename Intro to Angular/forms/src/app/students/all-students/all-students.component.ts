import { StudentsAsyncService } from './../students-async.service';
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
  constructor(private studentsService: StudentsAsyncService, public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentsService.getStudents().subscribe((response)=> {
      this.students  = response;
    });
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
        //this.students = this.studentsService.getStudents();
        this.getStudents();
    })

  }

}
