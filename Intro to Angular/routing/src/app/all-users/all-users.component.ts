import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {

   }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
