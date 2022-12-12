import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;
  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.paramMap.get('id'));  
    console.log(this.route.snapshot.queryParamMap.get('admin'));
    let id = parseInt(this.route.snapshot.paramMap.get('id')+'');
    this.user = this.usersService.getUser(id);

  }

  navigateToContact(){
    this.router.navigate(['users','1'],{queryParams: {admin: false}});
  
  }

}
