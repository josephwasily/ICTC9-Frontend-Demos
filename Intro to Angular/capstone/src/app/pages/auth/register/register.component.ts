import { Router } from '@angular/router';
import { AuthService } from './../../../lib/services/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchingValidator } from 'src/app/lib/validators/passwordMatchingValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required, Validators.minLength(8)]]
  }, {validators: [passwordMatchingValidator]});
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){

  
  }
  
  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');

  }
  get confirmPassword(){
    return this.form.get('confirmPassword');

  }
  submit(){
    //register user in firebase
    this.auth.signUp(
      this.email?.value + '',
      this.password?.value+''
    ).then((user)=> {

      //save other form fields collection 

      
      this.router.navigate(['admin']);

      console.log(user);
    }).catch((error)=> {
      console.log(error)  
    });
  }
  
}
