import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: string[] = ['Ahmad', 'Shaimaa', "Fadi"]
  newUser: string = 'hello';
  constructor() { 
    
  }

  ngOnInit(): void {

  }
  addNewUser(user: string){
    this.users.push(user);
  }

  print(){
    console.log(this.newUser);
  }
  setValue(user: any){
    this.newUser = user.value;
  }
}
