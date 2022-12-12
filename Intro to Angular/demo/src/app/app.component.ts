import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app2.component.css'],
})
export class AppComponent {
  title: string = 'demo';
  hello:string = 'hello';
  constructor(){
    //this.function1();
  }

  function1(value: string){
    //console.log('hello world!');
    this.title = value;
  }
}

