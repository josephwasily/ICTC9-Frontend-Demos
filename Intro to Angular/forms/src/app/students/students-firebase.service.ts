import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsFirebaseService {
  usersCollection!: AngularFirestoreCollection<Student>
  constructor(private firestore: AngularFirestore) {
    this.usersCollection = this.firestore.collection('users');
   }
    addStudent(student: Student){
      let addedStudent = this.usersCollection?.add(student);
      return from(addedStudent);
  
    }
    getStudents(): Observable<Student[]>{

        return this.usersCollection.valueChanges({"idField":'uid'});
    }
    getStudentById(id : string){
      return this.usersCollection.doc(id).valueChanges();
    }
    deleteStudent(id: string){
      return from(this.usersCollection.doc(id).delete());
    }
    updateStudent(id: string, student: Student){
      return from(this.usersCollection.doc(id).update({...student}));
  }

}
