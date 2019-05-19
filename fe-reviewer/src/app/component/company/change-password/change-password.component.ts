import { Component, OnInit } from '@angular/core';
import {IdUserService} from '../../../services/data-global/id-user.service';
import {
  validatorConfirmPassword,
  validatorName,
  validatorOldPassword,
  validatorPassword,
  validatorRequired
} from '../../../services/validator/validator';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NotifierService} from 'angular-notifier';
import {HttpService} from '../../../services/http/http.service';
import {AvatarService} from '../../../services/avatar-service/avatar.service';
import {ActivatedRoute} from '@angular/router';
import {ChangePass} from '../../../model/changePass.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  idUser;
  ChangePassForm: FormGroup;
  validatorForm = {
    ChangePassForm: true,
  };
  constructor(private userSer: IdUserService, private formBuilder: FormBuilder,private notifier: NotifierService,
              private httpService: HttpService, private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    this.ChangePassForm = this.formBuilder.group({
      oldPass: ['', [validatorOldPassword]],
      password: ['', [validatorPassword]],
      confirmPassword: ['', [validatorConfirmPassword]],
    });
    this.idUser = this.userSer.getId();
  }

  submitChangePass() {
    if (this.ChangePassForm.status === 'INVALID') {
      this.validatorForm.ChangePassForm = false;
    } else {
      this.validatorForm.ChangePassForm = true;
      const changePass: ChangePass = {
        newPassword: this.ChangePassForm.value.password,
        oldPassword: this.ChangePassForm.value.oldPass,
        email: localStorage.getItem('email')
      };
      console.log(changePass);
      this.httpService.changePass(changePass).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          // $('#btn-timeline').addClass('active');
          // $('#timeline').addClass('active show');
          // $('#btn-changePassword').removeClass('active');
          // $('#changePassword').removeClass('active show');
          this.clearPass();
          this.notifier.notify('success', 'Update password success');
        } else {
          this.notifier.notify('success', 'Update password error');
        }
      });
    }
  }

  clearPass() {
    this.ChangePassForm = this.formBuilder.group({
      oldPass: ['', [validatorOldPassword]],
      password: ['', [validatorPassword]],
      confirmPassword: ['', [validatorConfirmPassword]],
    });
  }

}
