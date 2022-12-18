import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

const material = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule


]

@NgModule({ 
  declarations: [],
  imports: [
    ... material
  ],
  exports: [material]
})
export class MaterialModule { }
