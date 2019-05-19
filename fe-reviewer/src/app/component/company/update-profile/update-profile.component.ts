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
  detailCompany: any;
  constructor(private userSer: IdUserService, private formBuilder: FormBuilder, notifier: NotifierService,
              private http: HttpService) {

    this.idUser = this.userSer.getId();
    this.formUpdateCompany = this.formBuilder.group({
      address: ['', [validatorRequired, validatorName]],
      website: ['', [validatorRequired, validatorWebsite]],
      name: ['', [validatorRequired, validatorName]],
      phone: ['', [validatorRequired, validatorPhone]],
    })
  }

  ngOnInit() {
    this.http.getDetailCompany(this.idUser).subscribe( (data: any) => {
      if (data) {
        console.log(data);
        this.detailCompany = data.company;
        this.clearProfile();
      }
    });
  }

  updateProfile() {
    if(this.formUpdateCompany.valid) {
      let data = {
        idCompany: this.idUser,
        nameCompany: this.formUpdateCompany.controls['name'].value,
        webCompany: this.formUpdateCompany.controls['website'].value,
        telCompany: this.formUpdateCompany.controls['phone'].value,
        addrCompany: this.formUpdateCompany.controls['address'].value,
        avaCompany: null,
        panelCompany: null,
      };
      this.http.updateInfoCompany(data).subscribe(res => {
        console.log(res);
      });
      console.log('save!!!');
    }
  }

  clearProfile() {
    this.formUpdateCompany.controls['name'].setValue(this.detailCompany.nameCompany);
    this.formUpdateCompany.controls['website'].setValue(this.detailCompany.webCompany);
    this.formUpdateCompany.controls['address'].setValue(this.detailCompany.addrCompany);
    this.formUpdateCompany.controls['phone'].setValue(this.detailCompany.telCompany);
  }

}
