import { LayoutComponent } from './lib/layout/layout.component';
import { AuthService } from './lib/services/auth/auth.service';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  // @ViewChild('dobInput') dob! : ElementRef;
  // @ViewChild('ageInput') age! : ElementRef;
  // @ViewChild(LayoutComponent) layout! : LayoutComponent;
  constructor(public authService: AuthService){

  }
  ngAfterViewInit(): void {
    // console.log(this.dob);
    // console.log(this.layout);
    // this.layout.val = 20;
  }

  ngOnInit(): void {
    // console.log(this.dob);
  }
  title = 'capstone';

  navigateToLogin(){
    
  }
  calculateAge(){ 
    // const currentDobYear = new Date(this.dob.nativeElement.value).getFullYear();
    // const currentYear = new Date().getFullYear();
    // this.age.nativeElement.value = currentYear-currentDobYear;
  }
}
