import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserService} from '../../services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('typeRev', data.typeRev);
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('isActive', data.isActive);
        this.router.navigate(['/home']);
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

}
