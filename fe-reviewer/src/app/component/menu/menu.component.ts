import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardService} from '../../services/auth/auth-guard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authGuard: AuthGuardService, private router: Router) { }

  ngOnInit() {
    console.log(window.location.toString());
  }

  checkAuthGuard() {
    return this.authGuard.canActivate();
  }
  removeToken() {
    localStorage.removeItem('userToken');
    // this.router.navigate(['/']);
  }

}
