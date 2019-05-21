import {Component, OnInit} from '@angular/core';
import {
  validatorConfirmPassword,
  validatorEmail,
  validatorRequired,
  validatorPassword,
  validatorName, validatorPhone, validatorWebsite
} from '../../../services/validator/validator';
import {NotifierService} from 'angular-notifier';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpService} from '../../../services/http/http.service';
import {Admin} from '../../../model/admin.model';
import {parse} from 'url';
import {error} from 'protractor';
import {AdminBlock} from '../../../model/AdminBlock.model';
import * as $ from 'jquery';
import {ResetPassAdmin} from '../../../model/ResetPassAdmin.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  private notifier: NotifierService;
  listAdmin: Admin[];
  arr: Admin[];
  adminForm: FormGroup;
  passForm: FormGroup;
  role;
  check: boolean;
  queryField: FormControl = new FormControl();
  name;
  typeRole = [{
    id: '1',
    name: 'Manage User',
  },
    {
      id: '2',
      name: 'Manage Product',
    },
    {
      id: '3',
      name: 'Manage Feedback-Comment',
    }];

  validatorForm = {
    passForm: true,
    adminForm: true
  };

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {


    this.check = false;
    this.adminForm = this.formBuilder.group({
      idAdmin: [],
      dtCreated: [],
      active: [],
      role: [],
      name: ['', [validatorRequired, validatorName]],
      dobAdmin: ['', [validatorRequired]],
      email: ['', [validatorRequired, validatorEmail]],
      addressAdmin: ['', [validatorRequired]],
      phone: ['', [validatorRequired, validatorPhone]],
      password: ['', [validatorRequired, validatorPassword]]

    });
    this.passForm = this.formBuilder.group({
      idAdmin: [],
      password: ['', [validatorPassword]],
      confirmPassword: ['', [validatorConfirmPassword]],
    });

    const item: AdminBlock = {
      idAdmin: localStorage.getItem('idUser'),
      isActive: 'true'

    };
    this.httpService.getRoleAdmin(item).subscribe((data: any) => {
      if (data == '0') {
        this.check = true;
      } else {
        this.check = false;
      }
      this.role = data;

    });
    // console.log(this.role);
    this.loadData();
    console.log(this.check);


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
    // this.adminForm.setValue(admin);
    this.adminForm.controls['idAdmin'].setValue(admin.idAdmin);
    this.adminForm.controls['dtCreated'].setValue(admin.dtCreated);
    this.adminForm.controls['active'].setValue(admin.active);
    this.adminForm.controls['password'].setValue(admin.passAdmin);
    this.adminForm.controls['name'].setValue(admin.fullNameAdmin);
    this.adminForm.controls['email'].setValue(admin.emailAdmin);
    this.adminForm.controls['addressAdmin'].setValue(admin.addressAdmin);
    this.adminForm.controls['phone'].setValue(admin.phoneAdmin);
    this.adminForm.controls['dobAdmin'].setValue(parseDob);
    this.adminForm.controls['role'].setValue(admin.roleAdmin);

    // console.log(admin.roleAdmin);

    // console.log("parseDob");
    //  console.log(this.adminForm.value['dobAdmin']);
    //this.dataEdit = admin;
    //console.log(this.adminForm);
    //console.log(this.dataEdit);
  }

  submitEdit() {
    // console.log(this.adminForm.controls);
    const dob = new Date(this.adminForm.value.dobAdmin);
    const year = dob.getFullYear();
    if (this.adminForm.status === 'INVALID') {
      this.validatorForm.adminForm = false;
    } else if (year < 1990) {
      this.showNotification('error', 'please enter year > 1990');
    } else {
      const item = {
        idAdmin: this.adminForm.value.idAdmin,
        dtCreated: this.adminForm.value.dtCreated,
        isActive: this.adminForm.value.active,
        passAdmin: this.adminForm.value.password,
        fullNameAdmin: this.adminForm.value.name,
        emailAdmin: this.adminForm.value.email,
        addressAdmin: this.adminForm.value.addressAdmin,
        phoneAdmin: this.adminForm.value.phone,
        dobAdmin: this.adminForm.value.dobAdmin,
        role: this.adminForm.value.role
      };
      // console.log(item);
      this.httpService.editAdmin(item).subscribe((data: any) => {
        console.log('data', data);
        if (data.status === 'SUCCESS') {
          this.showNotification('success', 'Update Admin successfully');
          this.loadData();
          $('#close-button-edit').click();
        } else {
          this.showNotification('error', data.result);
        }
        ;
      });
    }
    ;

  }

  loadData() {
    this.httpService.getAllAdmin().subscribe((data: any) => {

      // console.log(data);
      const item = data;
      this.arr = item.filter(item => item.roleAdmin != '0');
      ;
      // console.log(this.arr);
      this.listAdmin = this.arr;
      // this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.includes('') || item.emailAdmin.includes('')));
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
      password: ['', [validatorRequired, validatorPassword]],
      role: [this.typeRole[0]]

    });

  }

  submitAdd() {
    const dob = new Date(this.adminForm.value.dobAdmin);
    const year = dob.getFullYear();
    if (this.adminForm.status === 'INVALID') {
      //console.log(this.adminForm);
      this.validatorForm.adminForm = false;
    } else if (year < 1900) {
      this.showNotification('error', 'please enter year > 1900');
    } else {
      //.log(this.adminForm);
      //console.log(this.role);
      const item = {
        idAdmin: this.adminForm.value.idAdmin,
        dtCreated: this.adminForm.value.dtCreated,
        isActive: this.adminForm.value.active,
        passAdmin: this.adminForm.value.password,
        fullNameAdmin: this.adminForm.value.name,
        emailAdmin: this.adminForm.value.email,
        addressAdmin: this.adminForm.value.addressAdmin,
        phoneAdmin: this.adminForm.value.phone,
        dobAdmin: this.adminForm.value.dobAdmin,
        role: this.adminForm.value.role.id
      };
      // console.log(item);
      this.httpService.addAdmin(item).subscribe((data: any) => {
        console.log('data', data);
        if (data.status === 'SUCCESS') {
          this.showNotification('success', 'Add Admin successfully');
          this.loadData();
          $('#close-button-add').click();
        } else {
          this.showNotification('error', data.result);
        }
        ;
      });
    }
    ;
  }

  resetPassword(admin: any) {
    this.passForm = this.formBuilder.group({
      idAdmin: [],
      password: ['', [validatorPassword]],
      confirmPassword: ['', [validatorConfirmPassword]],
    });
    this.name = admin.fullNameAdmin;
    const id = admin.idAdmin;
    this.passForm.controls['idAdmin'].setValue(admin.idAdmin);
    //this.adminForm.setValue(admin);

  }

  submitResetPass() {

    if (this.passForm.status === 'INVALID') {
      //console.log(this.adminForm);
      this.validatorForm.passForm = false;
    } else {
      // console.log(this.adminForm);
      const item: ResetPassAdmin = {
        idAdmin: this.passForm.value.idAdmin,
        passAdmin: this.passForm.value.password
      };

      // console.log(item);
      this.httpService.resetPassAdmin(item).subscribe((data: any) => {
        console.log('data', data);
        if (data.status === 'SUCCESS') {
          this.showNotification('success', 'Change pass successfully');
          this.loadData();
          $('#close-button-reset').click();
        } else {
          this.showNotification('error', data.result);
        }
        ;
      });
    }
    ;

  }

  lockAdmin(admin) {
    let item = {
      idAdmin: admin.idAdmin,
      isActive: admin.active
    };
    // console.log(item);
    this.httpService.lockAdmin(item).subscribe((data: any) => {
      this.loadData();
    });

  }

  search() {

    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe((item: any) => {
        const result = item.toUpperCase();
        this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.toUpperCase().includes(result) || item.emailAdmin.toUpperCase().includes(result)));
      });
    // do something
    // console.log(event.target.value) ;
    // const key = event.target.value;
    // this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.includes(key) || item.emailAdmin.includes(key)));

  }

  // onEnter(event){
  //   const key = event.target.value;
  //   this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.includes(key) || item.emailAdmin.includes(key)));
  // }


}
