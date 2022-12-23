import { ValidatorFn } from "@angular/forms";

export const passwordMatchingValidator :ValidatorFn  = (control)  => {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    //invalid
    if(password && confirm 
        && password !== confirm 
        ){
            return {
                passwordDoesntMatch: true
            };
        }
    return null;
}