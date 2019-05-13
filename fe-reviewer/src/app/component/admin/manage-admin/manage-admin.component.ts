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
import { parse } from 'url';
import { error } from 'protractor';
import { AdminBlock } from '../../../model/AdminBlock.model';
import * as $ from 'jquery';
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

  listAdmin: Admin[];
  adminForm: FormGroup;
  role;
  check:boolean;
  validatorForm = {
    adminForm: true
  };

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {


    this.check=false;
    this.adminForm = this.formBuilder.group({
      idAdmin: [],
      dtCreated: [],
      active: [],
      name: ['', [validatorRequired, validatorName]],
      dobAdmin: ['', [validatorRequired]],
      email: ['', [validatorRequired, validatorEmail]],
      addressAdmin: ['', [validatorRequired]],
      phone: ['', [validatorRequired, validatorPhone]],
      password: ['', [validatorRequired, validatorPassword]]

    });
    
    const item:AdminBlock={
      idAdmin:localStorage.getItem('idUser'),
      isActive:true
  
    }
    this.httpService.getRoleAdmin(item).subscribe((data: any) => {
      console.log(data);
      this.role = data;
      if(this.role == '0') this.check=true; else this.check=false;
      
    });
    console.log(this.role);
    this.loadData();
    

  }

   showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

   editAdmin(admin: any) {

    const dob = new Date(admin.dobAdmin);
    const year = dob.getFullYear();
    const month = dob.getMonth() + 1 <= 9 ? `0${dob.getMonth() + 1}` : dob.getMonth() + 1;
    const date = dob.getDate() <= 9 ? `0${dob.getDate()}` : dob.getDate();
    const parseDob = `${year}-${month}-${date}`;

    //this.adminForm.setValue(admin);
    this.adminForm.controls['idAdmin'].setValue(admin.idAdmin);
    this.adminForm.controls['dtCreated'].setValue(admin.dtCreated);
    this.adminForm.controls['active'].setValue(admin.active);
    this.adminForm.controls['password'].setValue(admin.passAdmin);
    this.adminForm.controls['name'].setValue(admin.fullNameAdmin);
    this.adminForm.controls['email'].setValue(admin.emailAdmin);
    this.adminForm.controls['addressAdmin'].setValue(admin.addressAdmin);
    this.adminForm.controls['phone'].setValue(admin.phoneAdmin);
    this.adminForm.controls['dobAdmin'].setValue(parseDob);

    // console.log("parseDob");
    //  console.log(this.adminForm.value['dobAdmin']);
    //this.dataEdit = admin;
    //console.log(this.adminForm);
    //console.log(this.dataEdit);
  }

  submitEdit() {
    if (this.adminForm.status === 'INVALID') {
      this.validatorForm.adminForm = false;
    } else {
      const item: Admin = {
        idAdmin: this.adminForm.value.idAdmin,
        dtCreated: this.adminForm.value.dtCreated,
        isActive: this.adminForm.value.active,
        passAdmin: this.adminForm.value.password,
        fullNameAdmin: this.adminForm.value.name,
        emailAdmin: this.adminForm.value.email,
        addressAdmin: this.adminForm.value.addressAdmin,
        phoneAdmin: this.adminForm.value.phone,
        dobAdmin: this.adminForm.value.dobAdmin
      }




      // console.log(item);
      this.httpService.editAdmin(item).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.showNotification('success', 'Update Admin successfully');
          this.loadData();

        } else {
          this.showNotification('error', data.result);
        };
      });
    };

  }
   loadData() {
    this.httpService.getAllAdmin().subscribe((data: any) => {

      // console.log(data);
      const arr = data;
     // console.log(arr);
      this.listAdmin = arr.filter(item => item.roleAdmin == 1);
     // console.log(this.listAdmin);
      // console.log(this.listAdmin);

    });
  }

   addAdmin() {
    this.adminForm = this.formBuilder.group({
      idAdmin: [],
      dtCreated: [],
      active: [],
      name: ['', [validatorRequired, validatorName]],
      dobAdmin: ['', [validatorRequired]],
      email: ['', [validatorRequired, validatorEmail]],
      addressAdmin: ['', [validatorRequired]],
      phone: ['', [validatorRequired, validatorPhone]],
      password: ['', [validatorRequired, validatorPassword]]
    });
    
  }

  submitAdd() {
    if (this.adminForm.status === 'INVALID') {
      //console.log(this.adminForm);
      this.validatorForm.adminForm = false;
    } else {
     // console.log(this.adminForm);
      const item: Admin = {
        idAdmin: this.adminForm.value.idAdmin,
        dtCreated: this.adminForm.value.dtCreated,
        isActive: this.adminForm.value.active,
        passAdmin: this.adminForm.value.password,
        fullNameAdmin: this.adminForm.value.name,
        emailAdmin: this.adminForm.value.email,
        addressAdmin: this.adminForm.value.addressAdmin,
        phoneAdmin: this.adminForm.value.phone,
        dobAdmin: this.adminForm.value.dobAdmin
      }




      // console.log(item);
      this.httpService.addAdmin(item).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.showNotification('success', 'Add Admin successfully');
          this.loadData();
          $('#close-button-1').click();
        } else {
          this.showNotification('error', data.result);
        };
      });
    };
  }





}
