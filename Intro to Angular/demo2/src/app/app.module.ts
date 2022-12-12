import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';

const routes : Routes = [
  {path:'', component: UserListComponent},
  {path:'all-users', component: UserListComponent, children: [
    {path:'user/:id', component: UserComponent}
  ]},
  {path:'all-staff', component: AllStaffComponent},
  {path:'contact', component: ContactComponent},
  
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AllStaffComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
