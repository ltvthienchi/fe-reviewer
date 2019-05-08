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
    this.loadData();
    
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  public editAdmin(admin : any) {
    
    const dob = new Date(admin.dobAdmin);
      const year = dob.getFullYear();
      const month = dob.getMonth() + 1 <= 9 ? `0${dob.getMonth() + 1}` : dob.getMonth() + 1;
      const date = dob.getDate() <= 9 ? `0${dob.getDate()}` : dob.getDate();
      const parseDob = `${year}-${month}-${date}`;

    this.adminForm.setValue(admin);
   
    this.adminForm.controls['dobAdmin'].setValue(parseDob);

    this.dataEdit = admin;
    console.log(this.adminForm);
    //console.log(this.dataEdit);
  }

   submitEdit(){
    const item = this.adminForm.value;
    console.log(item);
    this.httpService.editAdmin(item).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.showNotification( 'success', 'Update Admin successfully' );
        this.loadData();
        
      } else {
        this.showNotification( 'error', data.result );
      }
    });
  }
  public loadData(){
    this.httpService.getAllAdmin().subscribe((data: any) => {
      
      // console.log(data);
       this.listAdmin = data;
      // console.log(this.listAdmin);
       
     });
  }

}
