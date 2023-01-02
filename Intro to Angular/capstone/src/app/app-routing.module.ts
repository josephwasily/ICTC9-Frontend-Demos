import { NotloggedinGuard } from './lib/guards/notloggedin.guard';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './lib/guards/auth.guard';
import { LayoutComponent } from './lib/components/layout/layout.component';

const routes: Routes = [
  {path:'', 
      children: [ 
          {path:'', component: HomeComponent, pathMatch: 'full'}]},
  {path:'auth', loadChildren: ()=> import('./pages/auth/auth.module').then((m)=> m.AuthModule), 
  canActivate:[NotloggedinGuard]
},
  {path:'admin', loadChildren: ()=> import('./pages/admin/admin.module').then((m)=> m.AdminModule), 
  canActivate: [AuthGuard]
},
{path:'todos', loadChildren: ()=> import('./pages/todos/todo.module').then((m)=> m.TodoModule), 
canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
