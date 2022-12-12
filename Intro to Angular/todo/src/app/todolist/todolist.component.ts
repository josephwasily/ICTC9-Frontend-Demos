import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = 'new todo';
  className: string = '';
  constructor() {
    this.todos.push({
      content:'hello',
      isCompleted: false
    });
    this.todos.push({
      content:'hello2',
      isCompleted: false
    });

   }

  ngOnInit(): void {
  }

  addTodo(){
    console.log(this.newTodo);
    // this.todos.push({
    //   content: this.newTodo,
    //   isCompleted: false
    // });
  }

  complete(todo:Todo, index: number){
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
    //todo.isCompleted = !todo.isCompleted;
    if(todo.isCompleted){
      this.className = 'completed';
    }
    else {
      this.className = '';
    }

    
  }

  deleteTodo(index:number){
    this.todos.splice(index,1);
  }

  changeNewTodo(element : any){
    
    console.log('updating todo');
    this.newTodo = element.value;
  }
}
