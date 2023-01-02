import { AddTodoComponent } from './add-todo/add-todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/lib/components/layout/layout.component';

const routes: Routes = [
  {path:'', component: LayoutComponent, children:[ 
       {path:'add', component: AddTodoComponent}
      ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
