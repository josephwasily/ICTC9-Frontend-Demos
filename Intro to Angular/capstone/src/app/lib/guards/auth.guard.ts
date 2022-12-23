import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let guardObsv  =this.authService.userState$
      .pipe(
        map((value)=> {
          if(value) return true;
          else {
            //navigate to auth/login
            this.router.navigate(['auth/login']);

            return false;
          } 

        })
      )
      return guardObsv;

  }
  
}
