import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  checkLogin(): boolean {
    if (!this.auth.isAuthenticated()) {
      return false;
    }
    return true;
  }

  isCompany(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'ROLE_COMPANY') {
      return true;
    } else {
      return false;
    }
  }
}
