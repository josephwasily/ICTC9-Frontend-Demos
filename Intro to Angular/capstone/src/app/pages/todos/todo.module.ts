import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { MaterialModule } from 'src/app/lib/components/material/material.module';


@NgModule({
  declarations: [AddTodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class TodoModule { }
