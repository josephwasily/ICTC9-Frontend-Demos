import { StudentsService } from './../students.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.css']
})
export class CreateReactiveComponent implements OnInit {
  constructor(private studentsService: StudentsService, private fb: FormBuilder){}
  ngOnInit(): void {
     this.form.valueChanges.subscribe((value)=> console.log(value));
     this.form.statusChanges.subscribe((status)=> console.log(status));
  }
   //name =  new FormControl('', [Validators.requ ired])
//   form = new FormGroup({
//       firstName: new FormControl('', [Validators.required]),
//       lastName: new FormControl(''),  
//       age: new FormControl<number >(0, [Validators.min(0), Validators.required],[]),
//       gender: new FormControl<'male'|'female' | ''>('male'),
//       url: new FormControl('', [Validators.required, secureUrlValidator]),
//       languages: new FormArray([])
//   })

  form = this.fb.group({
   firstName: ['', [Validators.required]],
   lastName: [''],
   age: [0, [Validators.min(0), Validators.required]],
   gender: this.fb.control<'male'| 'female' | ''>(''),
   url: ['', [Validators.required, secureUrlValidatorFactory('https') ]],
   languages: this.fb.array([])
  })
   submit(){
    //console.log(this.name);
    // console.log('logging on submit');
    // console.log(this.form);
    
    // this.form.setValue({
    //   firstName: 'joseph',
    //   lastName:'botros',
    //   age: 30,
    //   gender: 'male'
    // })

    // this.form.patchValue({
    //   firstName:'ahmad'
    // });  

    // console.log({...this.form.value} as Student);
    //this.studentsService.addStudent({...this.form.value} as Student)
    console.log(this.form);
   }

   get url(){
      return this.form.get('url');
   }

   get languages ():  FormArray{
      return this.form.get('languages') as FormArray;
   }
   addLanguage(){
      const languageFormGroup =  new FormGroup({
          title: new FormControl(''),
          level: new FormControl<'beginner' | 'advanced' | ''>('')
      });
      this.languages.push(languageFormGroup);
   }
   deleteLanguage(index: number){
    this.languages.removeAt(index);
   }

}


function secureUrlValidator(control: AbstractControl){
   
    let url = control.value;
    if(!url?.startsWith('https')){
        return {
          insecureUrl: true
        }; //error object
    }
    else return null; // valid
   
}

function secureUrlValidatorFactory(urlStarter: string){
      return (control: AbstractControl)=> {
         let url = control.value;
         if(!url?.startsWith(urlStarter)){
             return {
               insecureUrl: true
             }; //error object
         }
         else return null; // valid
      }
}

