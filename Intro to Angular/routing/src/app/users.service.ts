import { User } from './user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [{id: 1, name: 'joseph'},{id: 2, name: 'ahmad'}];
  constructor() { }

  getUsers() : User[]  {
    return this.users;
  }
  getUser(id: number) : User | null{
      // return this.users.filter((value)=> value.id == id)[0];
      for(let user of this.users){
        if(user.id
           == id){
            return user;
           }
      }
      return null;
  }
}
