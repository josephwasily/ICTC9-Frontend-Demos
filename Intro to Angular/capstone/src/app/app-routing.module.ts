import { NotloggedinGuard } from './lib/guards/notloggedin.guard';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './lib/guards/auth.guard';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'auth', loadChildren: ()=> import('./pages/auth/auth.module').then((m)=> m.AuthModule), 
  canActivate:[NotloggedinGuard]
},
  {path:'admin', loadChildren: ()=> import('./pages/admin/admin.module').then((m)=> m.AdminModule), 
  canActivate: [AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
