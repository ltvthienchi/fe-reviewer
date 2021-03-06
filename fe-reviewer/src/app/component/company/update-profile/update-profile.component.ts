import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {IdUserService} from '../../../services/data-global/id-user.service';
import {EmailValidator, FormBuilder, FormGroup} from '@angular/forms';
import {NotifierService} from 'angular-notifier';
import {HttpService} from '../../../services/http/http.service';
import {validatorName, validatorRequired, validatorWebsite, validatorEmail, validatorPhone} from '../../../services/validator/validator';
import * as $ from 'jquery';
import {ActivatedRoute} from '@angular/router';
import {NameService} from '../../../services/name-service/name.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  @Input() idCompany;
  @Output() eventAction:EventEmitter<any> = new EventEmitter();
  idUser;
  formUpdateCompany: FormGroup;
  validatorForm = {
    formUpdateCompany: true
  };
  detailCompany: any;
  constructor(private userSer: IdUserService, private formBuilder: FormBuilder,private notifier: NotifierService,
              private http: HttpService, private route: ActivatedRoute, private nameService: NameService) {

    this.formUpdateCompany = this.formBuilder.group({
      address: ['', [validatorRequired]],
      website: ['', [validatorRequired, validatorWebsite]],
      name: ['', [validatorRequired, validatorName]],
      phone: ['', [validatorRequired, validatorPhone]],
    });
    this.idUser = this.userSer.getId();

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = this.userSer.getId();
      if (this.idCompany === this.idUser) {
        this.getData();
      }
    });
  }

  getData() {
    this.http.getDetailCompany(this.idUser).subscribe( (data: any) => {
      if (data) {
        this.detailCompany = data.company;
        this.clearProfile();
      }
    });
  }

  updateProfile() {
    console.log(this.formUpdateCompany);
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
      console.log(data);
      this.http.updateInfoCompany(data).subscribe(res => {
        if(res['status'] === 'SUCCESS') {
          this.nameService.fire(data.nameCompany);
          this.eventAction.emit({code: 'update'});
          // $('#btn-timeline').addClass('active');
          // $('#timeline').addClass('active show');
          // $('#btn-updateProfile').removeClass('active');
          // $('#updateProfile').removeClass('active show');
          this.notifier.notify('success', 'Update info success');
        } else {
          this.notifier.notify('error', 'Update info success');
        }
      });
    }
  }

  clearProfile() {
    this.formUpdateCompany.controls['name'].setValue(this.detailCompany.nameCompany);
    this.formUpdateCompany.controls['website'].setValue(this.detailCompany.webCompany);
    this.formUpdateCompany.controls['address'].setValue(this.detailCompany.addrCompany);
    this.formUpdateCompany.controls['phone'].setValue(this.detailCompany.telCompany);
  }

}
