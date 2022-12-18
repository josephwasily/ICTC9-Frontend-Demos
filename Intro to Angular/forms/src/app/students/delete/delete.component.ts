import { StudentsService } from './../students.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private studentsService: StudentsService,
      private dialogRef: MatDialogRef<DeleteComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any
    ){

  }

  confirm(){
    console.log(this.data); 
    //delete student
    this.studentsService.deleteStudent(this.data.id);
    this.dialogRef.close(true);


  }
}
