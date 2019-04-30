import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {
  validatorConfirmPassword,
  validatorEmail,
  validatorRequired,
  validatorPassword,
  validatorName, validatorPhone, validatorWebsite
} from '../../services/validator/validator';
import {Company} from '../../model/company.model';
import {UserService} from '../../services/user-service/user.service';
import {User} from '../../model/user.model';
import {NotifierService} from 'angular-notifier';
import {CompanyService} from '../../services/company-service/company.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private notifier: NotifierService;
  normalUserForm: FormGroup;
  businessUserForm: FormGroup;
  validatorForm = {
    normalUserForm: true,
    businessUserForm: true
  };
  constructor(private formBuilder: FormBuilder, private userService: UserService, notifier: NotifierService,
              private companyService: CompanyService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.normalUserForm = this.formBuilder.group({
      email: ['', [validatorRequired, validatorEmail]],
      password: ['', [validatorPassword]],
      confirmPassword: ['', [validatorConfirmPassword]],
      firstName: ['', [validatorRequired, validatorName]],
      lastName: ['', [validatorRequired, validatorName]],
    });
    this.businessUserForm = this.formBuilder.group({
      email: ['', [validatorRequired, validatorEmail]],
      password: ['', [validatorPassword]],
      confirmPassword: ['', [validatorConfirmPassword]],
      nameCompany: ['', [validatorRequired]],
      addrCompany: ['', [validatorRequired]],
      telCompany: ['', [validatorRequired, validatorPhone]],
      webCompany: ['', [validatorRequired, validatorWebsite]],
    });
  }

  submitNormalForm() {
    if (this.normalUserForm.status === 'INVALID') {
      this.validatorForm.normalUserForm = false;
      // console.log(this.normalUserForm);
    } else {
      this.validatorForm.normalUserForm = true;
      // this.userService.registerUser(this.validatorForm.value)
      const user: User = {
        userName: this.normalUserForm.value.email,
        passAccount: this.normalUserForm.value.password,
        typeAccount: 2,
        isActive: false,
        nameAccount: this.normalUserForm.value.firstName + ' ' + this.normalUserForm.value.lastName
      };
      this.userService.registerUser(user).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.showNotification( 'success', 'Create Successfully!! Please check your mail box to Active Account!' );
        } else {
          this.showNotification( 'error', data.result );
        }
      });
    }
  }

  submitBusinessForm() {
    if (this.businessUserForm.status === 'INVALID') {
      this.validatorForm.businessUserForm = false;
      // console.log(this.normalUserForm);
    } else {
      this.validatorForm.businessUserForm = true;
      const company: Company = {
        nameCompany: this.businessUserForm.value.nameCompany,
        addrCompany: this.businessUserForm.value.addrCompany,
        webCompany: this.businessUserForm.value.webCompany,
        telCompany: this.businessUserForm.value.telCompany,
        emailCompany: this.businessUserForm.value.email,
        password: this.businessUserForm.value.password,
        typeAccount: 1
      };
      this.companyService.createCompany(company).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.showNotification('success', 'Create Company Successfully!! Please wait admin approve to Active Account');
        } else {
          this.showNotification( 'error', data.result );
        }
      });
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
}
