import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, switchMap } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState$ = this.fireAuth.authState
  .pipe(
    switchMap((value)=> {
          // check if value null -> return null observable
          if(!value){
            return of(null);
          }
          else {
            
            //else query firebase user collection -> return User Obsevable 
            return this.fs.collection<User>('users').doc(value.uid).valueChanges();
          }
    })
  );
  constructor(private fireAuth: AngularFireAuth, private fs: AngularFirestore) {
   }


  signIn(email:string, password: string){


    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
  signUp(name: string, email: string, password: string, isAdmin: boolean){
    return this.fireAuth.createUserWithEmailAndPassword(email, password ).then((val)=> {
          //create a user collection 
          let user: User = {
            id: val.user?.uid,
            name: name,
            isAdmin: isAdmin
          };
          return this.fs.collection<User>('users').doc(val.user?.uid).set(user);

    });
  }
 
}
