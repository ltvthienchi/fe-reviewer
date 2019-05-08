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
import {UpdateInfoProfile} from '../model/updateInfoProfile.model';
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
  private changeAvar;
  private changeBackground;
  validatorForm = {
    changePass: true,
    updateInfoProfile: true
  };

  constructor(private formBuilder: FormBuilder, notifier: NotifierService, private httpService: HttpService) {
    this.notifier = notifier;
    this.firstName = '';
    this.lastName = '';
    this.dobReviewer = '';
    this.emailReviewer = localStorage.getItem('email');
    this.fullName = localStorage.getItem('fullName');
    this.changePass = this.formBuilder.group({
      newPass: ['', [validatorPassword]],
      confNewPass: ['', [validatorConfirmPassword]],
    });
    this.updateInfoProfile = this.formBuilder.group({
      firstName: ['', [validatorRequired, validatorName]],
      lastName: ['', [validatorRequired, validatorName]],
      dobReviewer: [''],
      genderReviewer: [true],
    });
  }


  ngOnInit() {
    this.httpService.getReviewerInfo(this.emailReviewer).subscribe( (data: any) => {
      const dob = new Date(data.dateOfBirth);
      const year = dob.getFullYear();
      const month = dob.getMonth() + 1 <= 9 ? `0${dob.getMonth() + 1}` : dob.getMonth() + 1;
      const date = dob.getDate() <= 9 ? `0${dob.getDate()}` : dob.getDate();
      const parseDob = `${year}-${month}-${date}`;
      const gender = !!data.gender;
      this.dobReviewer = parseDob;
      this.updateInfoProfile.controls['firstName'].setValue(data.firstName);
      this.updateInfoProfile.controls['lastName'].setValue(data.lastName);
      this.updateInfoProfile.controls['dobReviewer'].setValue(parseDob);
      this.updateInfoProfile.controls['genderReviewer'].setValue(gender);
    });
  }

  submitUpdateInfo() {
    console.log(this.updateInfoProfile);
    if (this.updateInfoProfile.status === 'INVALID') {
      this.validatorForm.updateInfoProfile = false;
    } else {
      this.validatorForm.updateInfoProfile = true;
      const updateInPro: UpdateInfoProfile = {
        firstName: this.updateInfoProfile.value.firstName,
        lastName: this.updateInfoProfile.value.lastName,
        dob: this.updateInfoProfile.value.dobReviewer,
        gender: this.updateInfoProfile.value.gender,
        avaReviewer: this.changeAvar,
        panelReviewer: this.changeBackground
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

  handleFileInput(files: FileList, type) {
    if (type === 'avatar') {
      this.changeAvar = files.item(0);
    } else {
      this.changeBackground = files.item(0);
    }
    // this.fileToUpload = files.item(0);
  }

  test() {
    console.log(this.updateInfoProfile.controls);
  }

  submitChangePass() {
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
