import { Component, OnInit } from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {JwtHelperService} from '@auth0/angular-jwt';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdminService} from '../../../services/admin-service/admin.service';
import {Router} from '@angular/router';
import {validatorEmail, validatorPassword, validatorRequired} from '../../../services/validator/validator';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  private notifier: NotifierService;
  private jwtHelper: JwtHelperService;
  signInAdminForm: FormGroup;
  validatorForm = {
    signInAdminForm: true
  };
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router,
              notifier: NotifierService, jwtHelper: JwtHelperService) {
    this.notifier = notifier;
    this.jwtHelper = jwtHelper;
  }

  ngOnInit() {
    this.signInAdminForm = this.formBuilder.group({
      email: ['', [validatorRequired, validatorEmail]],
      password: ['', [validatorPassword]]
    });
  }

  OnAdminSubmit() {
    if (this.signInAdminForm.status === 'INVALID') {
      this.validatorForm.signInAdminForm = false;
    } else {
      this.adminService.adminAuthentication(this.signInAdminForm.value.email,
        this.signInAdminForm.value.password).subscribe((data: any) => {
        if (data.status === 'FAIL') {
          this.showNotification('error', data.result);
        } else {
          const tokenDecoded = this.jwtHelper.decodeToken(data.result);
          localStorage.setItem('userToken', data.result);
          localStorage.setItem('fullName', tokenDecoded.fullName);
          localStorage.setItem('isActive', tokenDecoded.isActive);
          localStorage.setItem('email', tokenDecoded.sub);
          localStorage.setItem('idUser', tokenDecoded.idUser);
          if (tokenDecoded.scopes[0].authority === 'ROLE_ADMIN') {
            localStorage.setItem('role', 'ROLE_ADMIN');
          }
          if (tokenDecoded.isActive !== true) {
            this.showNotification('error', 'Account is not active!!');
          } else {
            this.router.navigate(['/admin/manage-admin']);
          }

        }
      });
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
}
