import { LoggedInGuard } from './logged-in.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material';


const routes: Routes = [
  {path: '', redirectTo: 'contact', pathMatch:'full' },
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'contact', component: ContactComponent},
  {path:'all-users', component: AllUsersComponent, canActivate: [LoggedInGuard]},
  {path: 'users/:id', component: UserDetailsComponent, children: [
    {path:'courses',component: UserCoursesComponent },
    {path: 'payments', component: UserPaymentsComponent}
  ]},
  
  {path: 'products', loadChildren:()=> import('./products-dashboard/products-dashboard.module').then((m)=> m.ProductsDashboardModule)}, 
  {path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    AllUsersComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
    UserCoursesComponent,
    UserPaymentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatIconModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
