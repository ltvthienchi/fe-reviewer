import { Component, OnInit } from '@angular/core';
import {
  validatorConfirmPassword,
  validatorEmail,
  validatorRequired,
  validatorPassword,
  validatorName, validatorPhone, validatorWebsite
} from '../../../services/validator/validator';
import { NotifierService } from 'angular-notifier';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import { Admin } from '../../../model/admin.model';
@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  private notifier: NotifierService;
  private dataEdit = {
    fullNameAdmin: ''
  };
  
  listAdmin : Admin[] ;
  adminForm: FormGroup;
  validatorForm = {
    adminForm: true
  };

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;}

  ngOnInit() {



    this.adminForm = this.formBuilder.group({
      idAdmin:[],
      dtCreated:[],
      active:[],
      fullNameAdmin: ['', [validatorRequired]],
      dobAdmin: ['', [validatorRequired]],
      emailAdmin: ['', [validatorRequired]],
      addressAdmin: ['', [validatorRequired]],
      phoneAdmin: ['', [validatorRequired]],
      passAdmin: ['', [validatorRequired]]
      
    });

    this.httpService.getAllAdmin().subscribe((data: any) => {
      
     // console.log(data);
      this.listAdmin = data;
      console.log(this.listAdmin);
      
    });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  public editAdmin(admin : any) {
    admin.dobAdmin
    this.adminForm.setValue(admin);
    this.adminForm.setValue({
      dobAdmin: admin.dobAdmin.toISOString().slice(0,10)
    })

    this.dataEdit = admin;
    console.log(this.adminForm);
    //console.log(this.dataEdit);
  }

}
