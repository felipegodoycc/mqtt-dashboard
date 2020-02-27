import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }
  canActivate(): boolean {
    if (this.auth.isAdmin()) { return true; } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
