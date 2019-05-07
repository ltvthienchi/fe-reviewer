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
@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  private notifier: NotifierService;
  listAdmin= [] ;
  adminForm: FormGroup;
  validatorForm = {
    adminForm: true
  };

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;}

  ngOnInit() {



    this.adminForm = this.formBuilder.group({
      titleFeedback: ['', [validatorRequired]],
      contentFeedback: ['', [validatorRequired]],
      
    });

    this.httpService.getAllAdmin().subscribe((data: any) => {
      
      console.log(data);
      this.listAdmin = data;
      
    });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

}
