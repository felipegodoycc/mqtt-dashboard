import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthAPIService } from '../services/auth-api.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  isUserLoggedIn: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public auth: AuthAPIService,
              private router: Router)
  {
    this.auth.isUserLoggedIn.subscribe( res => this.isUserLoggedIn = res)
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
