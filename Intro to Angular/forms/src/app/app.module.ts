import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './students/create/create.component';
import { FormsModule } from '@angular/forms';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { EditComponent } from './students/edit/edit.component';
import { DeleteComponent } from './students/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    AllStudentsComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
