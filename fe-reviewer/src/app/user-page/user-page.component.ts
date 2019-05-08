import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http/http.service';

import {
  validatorConfirmPassword,
  validatorEmail,
  validatorName,
  validatorPassword,
  validatorRequired
} from '../services/validator/validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotifierService} from 'angular-notifier';
import {UpdateInfoprofile} from '../model/updateInfoProfile.model';
import {ChangePass} from '../model/changePass.model';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  private notifier: NotifierService;
  normalUserForm: FormGroup;
  updateInfoProfile: FormGroup;
  changePass: FormGroup;
  private emailReviewer: string;
  private firstName: string;
  private fullName: string;
  private lastName: string;
  private genderReviewer: number;
  private dobReviewer = '01-01-2019';
  validatorForm = {
    changePass: true,
    updateInfoProfile: true
  };

  constructor(private formBuilder: FormBuilder, notifier: NotifierService, private httpService: HttpService) {
    this.notifier = notifier;
  }


  ngOnInit() {
    this.changePass = this.formBuilder.group({
      email: ['', [validatorRequired, validatorEmail]],
      newPass: ['', [validatorPassword]],
      conNewPass: ['', [validatorConfirmPassword]],
    })
    this.updateInfoProfile = this.formBuilder.group({
      firstName: ['', [validatorRequired], validatorName],
      lastName: ['', [validatorRequired], validatorName],
      dobReviewer: ['', [validatorRequired], validatorName],
    });

    this.emailReviewer = localStorage.getItem('email');
    this.fullName = localStorage.getItem('fullName');
    this.httpService.getReviewerInfo(this.emailReviewer).subscribe( (data: any) => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.genderReviewer = data.gender;
      this.dobReviewer = data.dateOfBirth;
    });
  }

  submitUpdateInfo() {
    if (this.updateInfoProfile.status === 'INVALID') {
      this.validatorForm.updateInfoProfile = false;
      // console.log(this.updateInfoProfile);
    } else {
      this.validatorForm.updateInfoProfile = true;
      // this.userService.registerUser(this.validatorForm.value)
      const updateInPro: UpdateInfoprofile = {
        firstName: this.updateInfoProfile.value.firstName,
        lastName: this.updateInfoProfile.value.lastName,
        dob: this.updateInfoProfile.value.dobReviewer,
        gender: this.updateInfoProfile.value.gender,

      };
      this.httpService.updateInfoPro(updateInPro).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.showNotification( 'success', 'Send feedback successfully' );
          this.updateInfoProfile.reset();
        } else {
          this.showNotification( 'error', data.result );
        }
      });
    }
  }

  test() {
    console.log(this.dobReviewer);
  }

  submitchangePass() {
    if (this.changePass.status === 'INVALID') {
      this.validatorForm.changePass = false;
      console.log(this.changePass);
    } else {
      this.validatorForm.changePass = true;
      // this.userService.registerUser(this.validatorForm.value)
      const changePass: ChangePass = {
        newPass: this.normalUserForm.value.password,
        email: localStorage.getItem('email'),

      };
      this.httpService.changePass(changePass).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.showNotification( 'success', 'Send feedback successfully' );
          this.changePass.reset();
        } else {
          this.showNotification( 'error', data.result );
        }
      });
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
  checkGender() {
    if (this.genderReviewer === 1) {
      return true;
    }
    return false;
  }

}
