import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import * as $ from 'jquery';
import {
  validatorConfirmPassword,
  validatorName, validatorOldPassword,
  validatorPassword,
  validatorRequired
} from '../../services/validator/validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotifierService} from 'angular-notifier';
import {UpdateInfoProfile} from '../../model/updateInfoProfile.model';
import {ChangePass} from '../../model/changePass.model';
import {AvatarService} from '../../services/avatar-service/avatar.service';
import {ActivatedRoute} from '@angular/router';
import {IdUserService} from '../../services/data-global/id-user.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ActivityHistoryComponent} from './activity-history/activity-history.component';
import {NameService} from '../../services/name-service/name.service';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  @ViewChild('appChild') appChild: ActivityHistoryComponent;
  private notifier: NotifierService;
  updateInfoProfile: FormGroup;
  ChangePassForm: FormGroup;
  userInfo;
  idReviewer;
  localId;
  avatarHistory;
  avaImg: File;
  avaPanel: File;
  localImg;
  private emailReviewer: string;
  private firstName: string;
  private fullName: string;
  private lastName: string;
  private genderReviewer: number;
  private dobReviewer = '01-01-2019';
  private changeAvar;
  private changeBackground;
  private typeReviewer;
  validatorForm = {
    ChangePassForm: true,
    updateInfoProfile: true
  };

  constructor(private formBuilder: FormBuilder, notifier: NotifierService, private httpService: HttpService,
              private avatarService: AvatarService, private activatedRoute: ActivatedRoute, private idUserSer: IdUserService,
              private nameService: NameService) {
    $(document).ready(function () {
      $('html,body').animate({ scrollTop: 0 }, 'normal');
    });

    this.notifier = notifier;
    this.firstName = '';
    this.lastName = '';
    this.dobReviewer = '';
    this.emailReviewer = localStorage.getItem('email');
    this.ChangePassForm = this.formBuilder.group({
      oldPass: ['', [validatorOldPassword]],
      password: ['', [validatorPassword]],
      confirmPassword: ['', [validatorConfirmPassword]],
    });
    this.updateInfoProfile = this.formBuilder.group({
      firstName: ['', [validatorRequired, validatorName]],
      lastName: ['', [validatorRequired, validatorName]],
      dobReviewer: [''],
      genderReviewer: [true],
    });
  }


  ngOnInit() {
    this.localId = this.idUserSer.getId();
    this.idReviewer = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.getReviewerInfoById(this.idReviewer).subscribe( (data: any) => {
      console.log(data);
      this.userInfo = data;
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
      this.typeReviewer = data.typeReviewer;
      this.avatarHistory = this.userInfo.imgAvatar;
    });
  }

  reloadData() {
    this.httpService.getReviewerInfoById(this.idReviewer).subscribe( (data: any) => {
      this.userInfo = data;
      const dob = new Date(data.dateOfBirth);
      const year = dob.getFullYear();
      const month = dob.getMonth() + 1 <= 9 ? `0${dob.getMonth() + 1}` : dob.getMonth() + 1;
      const date = dob.getDate() <= 9 ? `0${dob.getDate()}` : dob.getDate();
      const parseDob = `${year}-${month}-${date}`;
      this.dobReviewer = parseDob;
      this.avatarHistory = this.userInfo.imgAvatar;
    });  }

  submitUpdateInfo() {
    console.log(this.updateInfoProfile);
    const dob = new Date(this.updateInfoProfile.value.dobReviewer);
    const year = dob.getFullYear();
    if (this.updateInfoProfile.status === 'INVALID') {
      this.validatorForm.updateInfoProfile = false;
    } else if (year < 1900) {
      this.showNotification('error', 'please enter year > 1900');
    } else {
      this.validatorForm.updateInfoProfile = true;
      const updateInPro: UpdateInfoProfile = {
        firstName: this.updateInfoProfile.value.firstName,
        lastName: this.updateInfoProfile.value.lastName,
        dob: this.updateInfoProfile.value.dobReviewer,
        gender: this.updateInfoProfile.value.genderReviewer,
        avaReviewer: this.changeAvar !== undefined ? this.changeAvar : null,
        panelReviewer: this.changeBackground !== undefined ? this.changeBackground : null
      };
      this.firstName = this.updateInfoProfile.value.firstName;
      this.lastName = this.updateInfoProfile.value.lastName;
      this.httpService.updateInfoPro(updateInPro).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.nameService.fire(this.firstName + ' ' + this.lastName);
          this.reloadData();
          if (updateInPro.avaReviewer != null) {
            this.avatarService.fire(this.localImg);
            this.avatarHistory = this.localImg;
            this.avaImg = null;
            this.avaPanel = null;
          }
          this.showNotification( 'success', 'Update Profile successfully' );
        } else {
          this.showNotification( 'error', data.result );
        }
      });
    }
  }

  handleFileInput(files: FileList, type) {
    const self = this;
    const tempImg = files[0].name.split('.');
    const exFile = tempImg[tempImg.length - 1];
    if (type === 'avatar') {
      if(exFile.toLocaleLowerCase() === 'png' || exFile.toLocaleLowerCase() === 'jpg') {
        this.changeAvar = files.item(0);
        setTimeout(function () {
          const file = files[0];
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            self.localImg = reader.result;
          }, false);
          reader.readAsDataURL(file);
        }, 0)
      } else {
        this.avaImg = null;
        this.notifier.notify('error', 'Please chose image has .png or .jpg');
      }
    } else {
      if(exFile.toLocaleLowerCase() === 'png' || exFile.toLocaleLowerCase() === 'jpg') {
        this.changeBackground = files.item(0);
      } else {
        this.avaPanel = null;
        this.notifier.notify('error', 'Please chose image has .png or .jpg');
      }
    }
  }

  test() {
    console.log(this.updateInfoProfile.controls);
  }

  submitChangePass() {
    if (this.ChangePassForm.status === 'INVALID') {
      this.validatorForm.ChangePassForm = false;
      console.log(this.ChangePassForm);
    } else {
      this.validatorForm.ChangePassForm = true;
      // this.userService.registerUser(this.validatorForm.value)
      const changePass: ChangePass = {
        newPassword: this.ChangePassForm.value.password,
        oldPassword: this.ChangePassForm.value.oldPass,
        email: localStorage.getItem('email')

      };
      this.httpService.changePass(changePass).subscribe((data: any) => {
        console.log('data', data);
if (data.status === 'SUCCESS') {
          this.ChangePassForm = this.formBuilder.group({
            oldPass: ['', [validatorOldPassword]],
            password: ['', [validatorPassword]],
            confirmPassword: ['', [validatorConfirmPassword]],
          });
          this.showNotification( 'success', 'Update Password successfully!!!' );
        } else {
          this.showNotification( 'error', data.result );
        }
      });
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  changeView(type) {
    if (type === 'profile') {
      this.appChild.reload();
      $('#profile').show();
      $('#edit').hide();
      $('#changepassword').hide();
      $('html,body').animate({ scrollTop: 0 }, 'normal');
    } else if (type === 'edit') {
      $('#profile').hide();
      $('#edit').show();
      $('#changepassword').hide();
    } else {
      $('#profile').hide();
      $('#edit').hide();
      $('#changepassword').show();
    }

  }

}
