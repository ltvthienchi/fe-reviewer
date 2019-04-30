import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardService} from '../../services/auth/auth-guard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private fullName: string;
  constructor(private authGuard: AuthGuardService, private router: Router) {
    this.fullName = localStorage.getItem('fullName');
  }

  ngOnInit() {
    console.log(window.location.toString());
  }

  checkAuthGuard() {
    return this.authGuard.canActivate();
  }
  removeToken() {
    localStorage.removeItem('userToken');
    // this.router.navigate(['/']);
    localStorage.removeItem('typeRev');
    localStorage.removeItem('fullName');
    localStorage.removeItem('isActive');
  }

}
