import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserService} from '../../services/user-service/user.service';
import {NotifierService} from 'angular-notifier';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private notifier: NotifierService;
  private jwtHelper: JwtHelperService;
  constructor(private userService: UserService, private router: Router, notifier: NotifierService, jwtHelper: JwtHelperService) {
    this.notifier = notifier;
    this.jwtHelper = jwtHelper;
  }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      if (data.status === 'FAIL') {
        this.showNotification('error', data.result);
      } else {
        const tokenDecoded = this.jwtHelper.decodeToken(data.result);
        localStorage.setItem('userToken', data.result);
        if (tokenDecoded.scopes.authority === 'ROLE_COMPANY') {
          localStorage.setItem('typeRev', '1');
        } else {
          localStorage.setItem('typeRev', '2');
        }
        localStorage.setItem('fullName', tokenDecoded.fullName);
        localStorage.setItem('isActive', tokenDecoded.isActive);
        this.router.navigate(['/home']);
      }
    });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

}
