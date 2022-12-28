import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosCollection! : AngularFirestoreCollection<Todo>;
  constructor(private fireStore: AngularFirestore) {
      this.todosCollection = this.fireStore.collection("todos")

   }

addTodo(todo: Todo){
    let addedTodo = this.todosCollection?.add(todo);
    return from(addedTodo);

 }
 getTodos(userId: string): Observable<Todo[]>{

     return this.fireStore
     .collection<Todo>
     ('todos', ref => ref.where('userId', '==', userId)).valueChanges({"idField":'id'}); //server-side filter 
 }

 updateTodo(id: string, todo: Todo){
     return from(this.todosCollection.doc<Todo>(id).update({...todo}));
 }

 getTodo(id: string){
    return this.todosCollection.doc<Todo>(id).valueChanges();
 }


}
