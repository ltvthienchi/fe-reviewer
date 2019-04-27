import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  company: Company = new Company();
  constructor(private formBuilder: FormBuilder, private userService: UserService, notifier: NotifierService) {
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
      emailCompany: ['', [validatorRequired, validatorEmail]],
      passwordCompany: ['', [validatorPassword]],
      confirmPasswordCompany: ['', [validatorConfirmPassword]],
      nameCompany: ['', [validatorRequired, validatorName]],
      addrCompany: ['', [validatorRequired, validatorName]],
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
        typeAccount: 1,
        isActive: true,
        nameAccount: this.normalUserForm.value.firstName + this.normalUserForm.value.lastName
      };
      this.userService.registerUser(user).subscribe(data => {
        if (data === 'Success') {
          this.showNotification( 'success', 'Create Successfully!!' );
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
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
}
