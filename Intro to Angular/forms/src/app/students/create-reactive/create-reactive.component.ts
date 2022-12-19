import { StudentsService } from './../students.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.css']
})
export class CreateReactiveComponent implements OnInit {
  constructor(private studentsService: StudentsService){}
  ngOnInit(): void {
     this.form.valueChanges.subscribe((value)=> console.log(value));
     this.form.statusChanges.subscribe((status)=> console.log(status));
  }
   //name =  new FormControl('', [Validators.requ ired])
  form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),  
      age: new FormControl<number >(0, [Validators.min(0), Validators.required],[]),
      gender: new FormControl<'male'|'female' | ''>('male'),
      url: new FormControl('', [Validators.required, secureUrlValidator]),
      languages: new FormArray([])
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
      const languageFormControl =  new FormGroup({
          title: new FormControl('')
      });
      this.languages.push(languageFormControl);
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
