import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user-service/user.service';
import {NotifierService} from 'angular-notifier';
import {JwtHelperService} from '@auth0/angular-jwt';
import {
  validatorEmail,
  validatorRequired,
  validatorPassword,
} from '../../services/validator/validator';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private notifier: NotifierService;
  private jwtHelper: JwtHelperService;
  signInForm: FormGroup;
  validatorForm = {
    signInForm: true
  };
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
              notifier: NotifierService, jwtHelper: JwtHelperService, private http: HttpService) {
    this.notifier = notifier;
    this.jwtHelper = jwtHelper;
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [validatorRequired, validatorEmail]],
      password: ['', [validatorPassword]]
    });
  }

  OnSubmit() {
    if (this.signInForm.status === 'INVALID') {
      this.validatorForm.signInForm = false;
    } else {
      this.userService.userAuthentication(this.signInForm.value.email,
        this.signInForm.value.password).subscribe((data: any) => {
        if (data.status === 'FAIL') {
          this.showNotification('error', data.result);
        } else {
          const tokenDecoded = this.jwtHelper.decodeToken(data.result);
          localStorage.setItem('userToken', data.result);
          if (tokenDecoded.scopes[0].authority === 'ROLE_COMPANY') {
            localStorage.setItem('role', 'ROLE_COMPANY');
          } else if (tokenDecoded.scopes[0].authority === 'ROLE_NORMAL') {
            localStorage.setItem('role', 'ROLE_NORMAL');
          }
          localStorage.setItem('fullName', tokenDecoded.fullName);
          localStorage.setItem('isActive', tokenDecoded.isActive);
          localStorage.setItem('email', tokenDecoded.sub);
          localStorage.setItem('idUser', tokenDecoded.idUser);
          if (tokenDecoded.isActive !== true) {
            this.showNotification('error', 'Account is not active!!');
          } else {
            this.router.navigate(['/home']);
          }

        }
      });
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

}
