import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { SpinnerService } from './../../services/spinner/spinner.service';
import { ChangeDetectorRef, Component, AfterViewInit, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit, OnInit {
    
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean = false;
  userName: string = "";
  isAdmin: boolean = false;
  userState$ = this.authSevice.userState$;
  private autoLogoutSubscription: Subscription = new Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef,
      private media: MediaMatcher,
      public spinnerService: SpinnerService,
      public authSevice: AuthService) {

      this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
       this.authSevice.userState$.subscribe((value)=> {
          if(value){
            this.isAdmin = value.isAdmin ?? false;
          }
       })
  }
  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
