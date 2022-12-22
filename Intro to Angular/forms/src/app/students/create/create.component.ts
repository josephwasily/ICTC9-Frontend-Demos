import { HttpClient } from '@angular/common/http';
import { StudentsAsyncService } from './../students-async.service';
import { StudentsService } from './../students.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import {interval, filter, map, Observable, from, fromEventPattern, fromEvent, Subscription, tap, switchMap, of} from 'rxjs'
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  student: Student = {
    firstName: ''
  }
  students:Student[] = [];
  students$? : Observable<Student[]>;
  sub?: Subscription;
  constructor(private studentsService: StudentsAsyncService, private router: Router, private http: HttpClient){

  }
  ngOnDestroy(): void {

    this.sub?.unsubscribe();
    
  }
  ngOnInit(): void {
   this.studentsService.getStudents().subscribe((students)=> {
    this.students = students;
   });

    let obs$ = new Observable((subscriber)=> {
        subscriber.next('first event');
        setTimeout(()=> {
            subscriber.next('second event after period of time');
            //subscriber.error();

            //logic 
        }, 1000);
       
    });
    let observer = {
      next: (val: any)=> console.log(val),
      error: (error: any)=> console.log(error, 'from the observer/subscriber'),
      complete: ()=> console.log('the observable has completed')
    }
    // obs$.subscribe((value)=>  {
    //     console.log(value);
    // });
    
    let obs2$ = from([{isUrgent: true, title: 'catastrophe'}, {isUrgent: false, title: 'regular event'}])
    .pipe(
      
      filter((value)=> value.isUrgent),
      map((value)=> value.title),

    );
    obs2$.subscribe((value)=> alert(value));

    // obs2$.subscribe((value)=>{
    //   if(value.isUrgent){
    //     alert(value.title);
    //   }
    // })

    let obs3$ =  fromEvent(document, 'click');
    this.sub =  obs3$.subscribe((value)=> {
      console.log(value);
    });
    // setTimeout(()=> this.sub.unsubscribe(), 5000);

    let nationality$ = this.http.get<Nationality>('https://api.nationalize.io?name=nathaniel')
    .pipe(
      map((obj)=> {
        let codes = '';
        obj.country.forEach(element => {
            codes+= element.country_id+','
        });
        return codes;
      }),
      switchMap((value)=> {
          return this.http.get<RestCountry[]>('https://restcountries.com/v3.1/alpha?codes='+value)
      }),
      map((value)=> value.map((x)=>  {x.name.common}))
    ).subscribe(value=> console.log(value));
  //this.students =


  }
  logForm(f: any){
    console.log(f);
  }
  submit(){
    //this.student.id = this.id++;
    this.studentsService.addStudent({...this.student}).subscribe({
    next: (response)=> {
      this.router.navigate(['/']);  
    },
    error: (error)=> {
      alert(JSON.stringify(error));
    },
    complete: ()=> console.log('completed')
  });
    //navigate
  }
}


export interface Nationality {
  country: Country[];
  name:    string;
}

export interface Country {
  country_id:  string;
  probability: number;
}


export interface RestCountry {
  name  :  {
    common: string
  },
  flags: {
    png: string
  }
}

