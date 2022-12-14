import { StudentsFirebaseService } from './../students-firebase.service';
import { StudentsAsyncService } from './../students-async.service';
import { StudentsService } from './../students.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ╔ÁInjectableAnimationEngine } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private studentsService: StudentsFirebaseService,
      private dialogRef: MatDialogRef<DeleteComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any
    ){

  }

  confirm(){
    console.log(this.data); 
    //delete student
    this.studentsService.deleteStudent(this.data.id).subscribe((_)=> {
      this.dialogRef.close(true);
    });


  }
}
