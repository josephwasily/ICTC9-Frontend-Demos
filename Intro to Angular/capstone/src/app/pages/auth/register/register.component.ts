import { Observable, ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../../../lib/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchingValidator } from 'src/app/lib/validators/passwordMatchingValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    userType: [1, Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required, Validators.minLength(8)]]
  }, {validators: [passwordMatchingValidator]});
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){

  
  }
  ngOnInit(): void {
    let obs$ = new Observable<number>((sub)=> {
        sub.next(Math.random());
        sub.next(Math.random());
    });

  
    // obs$.subscribe((obs)=> {
    //   console.log(obs, 'obs1');
    // })

    // obs$.subscribe((obs)=> {
    //   console.log(obs, 'obs2');
    // })
    let subj$ = new Subject<number>();
    subj$.subscribe((val)=> {
      console.log(val, 'from subject 1');
    });
    subj$.subscribe((val)=> {
      console.log(val, 'from subject 2');
    });

    let replaySubject$ = new ReplaySubject<number>()

    replaySubject$.next(1);
    replaySubject$.next(2);

    replaySubject$.subscribe((valu)=> {
      console.log(valu, 'from replay subject');
    })

    replaySubject$.next(3);

    // subj$.next(Math.random());
   

    // obs$.subscribe(subj$);
    // obs$.subscribe(subj$);

    let behaviorSubject = new BehaviorSubject('1');
    behaviorSubject.next('2');
    behaviorSubject.subscribe((valu)=> {
      console.log(valu, 'from behavior subject');
    });
    behaviorSubject.next('3');
    behaviorSubject.next('4');



  }
  
  get email(){
    return this.form.get('email');
  }
  get userType(){
    return this.form.get('userType');
  }

  get password(){
    return this.form.get('password');

  }
  get confirmPassword(){
    return this.form.get('confirmPassword');

  }
  get name(){
    return this.form.get('name');

  }
  submit(){
    //register user in firebase
    this.auth.signUp(
      this.name?.value + '',
      this.email?.value + '',
      this.password?.value+'',
      this.userType?.value == 1
    ).then((user)=> {

      //save other form fields collection 

      
      this.router.navigate(['admin']);

      console.log(user);
    }).catch((error)=> {
      console.log(error)  
    });
  }
  
}
