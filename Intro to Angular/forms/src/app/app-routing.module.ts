import { EditComponent } from './students/edit/edit.component';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { CreateComponent } from './students/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: AllStudentsComponent, pathMatch: 'full'},
  {path:'create', component: CreateComponent},
  {path:'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
