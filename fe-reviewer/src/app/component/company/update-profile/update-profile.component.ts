import { Component, OnInit } from '@angular/core';
import {IdUserService} from '../../../services/data-global/id-user.service';
import {EmailValidator, FormBuilder, FormGroup} from '@angular/forms';
import {NotifierService} from 'angular-notifier';
import {HttpService} from '../../../services/http/http.service';
import {validatorName, validatorRequired, validatorWebsite, validatorEmail, validatorPhone} from '../../../services/validator/validator';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  idUser;
  formUpdateCompany: FormGroup;
  validatorForm = {
    formUpdateCompany: true
  };
  constructor(private userSer: IdUserService, private formBuilder: FormBuilder, notifier: NotifierService,
              private http: HttpService) { }

  ngOnInit() {
    this.idUser = this.userSer.getId();
    this.formUpdateCompany = this.formBuilder.group({
      address: ['', [validatorRequired, validatorName]],
      website: ['', [validatorRequired, validatorWebsite]],
      email: ['', [validatorRequired, validatorEmail]],
      tel: ['', [validatorRequired, validatorPhone]],
    })
  }

  updateProfile() {

  }

}
