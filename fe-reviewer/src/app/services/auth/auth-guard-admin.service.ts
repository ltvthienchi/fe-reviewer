import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardAdminService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    const role = localStorage.getItem('role');
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['admin/login']);
      return false;
    } else {
      if (role !== 'ROLE_ADMIN') {
        this.router.navigate(['admin/login']);
        return false;
      } else {
        return true;
      }
    }
  }
}
