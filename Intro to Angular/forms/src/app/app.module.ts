import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './students/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { EditComponent } from './students/edit/edit.component';
import { DeleteComponent } from './students/delete/delete.component';
import { CreateReactiveComponent } from './students/create-reactive/create-reactive.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    AllStudentsComponent,
    EditComponent,
    DeleteComponent,
    CreateReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAnP7TeP8zHzLP2wg66lDjsGovAIZ13zbc",
      authDomain:  "htu-sample.firebaseapp.com",
      projectId: "htu-sample",
      storageBucket: "htu-sample.appspot.com",
      messagingSenderId: "962641759610",
      appId: "1:962641759610:web:bdad26d3f709b2c61ddac3",
      measurementId: "G-ENM2YCPNWL"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
