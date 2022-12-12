import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.css']
})
export class AllStaffComponent implements OnInit {
  staff: string[]= ['AWS', 'ward'];
  constructor() { }

  ngOnInit(): void {
  }

}
