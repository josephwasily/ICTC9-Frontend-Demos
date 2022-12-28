import { TodosService } from './../../../lib/services/storage/todos.service';
import { AuthService } from './../../../lib/services/auth/auth.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap, of, map } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from 'src/app/lib/interfaces/todo';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns = ["id", "name", "done"]
  dataSource = new MatTableDataSource<Todo>([]);
  constructor(private authService: AuthService, 
      private todosService: TodosService
    ){

  }
  ngAfterViewInit(): void {
    //connect paginator with angular material table 
    this.dataSource.paginator = this.paginator;
  }
    ngOnInit(): void {
      this.authService.userState$
      .pipe(
        switchMap( (val) => {

          if(val){
            return this.todosService.getTodos(val.uid); 
        }
        else {
          return of(null);
        }
    }),

    ).subscribe((response)=> {
      console.log(response);
      if(response){

        
        //this.dataSource.data = response.filter((v)=> v.userId == ""); //client-side filter 
        this.dataSource.data = response;
      }
    })

    }

  form = new FormGroup({
    name: new FormControl('',[Validators.required])
  })

  get name(){
    return this.form.get('name');
  }
  submit(){
    //invoke add todo todo service - user id 
    this.authService.userState$
    .pipe(
        switchMap( (val) => {
            if(val){
                return  this.todosService.addTodo({
                  name: this.name?.value + '',
                  done: false,
                  userId: val.uid
                })
            }
            else {
              return of(null);
            }
        })
    ).subscribe((value)=> {
      if(!value){
        alert('cannot create todoo');
      }
    })
   
   
  }
  toggleTodo(row: Todo){
    console.log('updating todo');
    //update firebase todo 
    row.done = !row.done;
    this.todosService.updateTodo(row.id + '', row);

  }

}
