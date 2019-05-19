import { Component, OnInit } from '@angular/core';
import { arrFeedback } from '../../../services/local_database/feedback';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import * as $ from 'jquery';
import {
  validatorConfirmPassword,
  validatorEmail,
  validatorRequired,
  validatorPassword,
  validatorName, validatorPhone, validatorWebsite
} from '../../../services/validator/validator';

@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.component.html',
  styleUrls: ['./feedback-admin.component.css']
})
export class FeedbackAdminComponent implements OnInit {
  private notifier: NotifierService;
  listFeedback = [];
  list: any[];
  isReply: boolean;
  sendForm: FormGroup;
  queryField: FormControl = new FormControl();
  validatorForm = {
    sendForm: true
  };
  check: boolean;
  data: any[];

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.sendForm = this.formBuilder.group({
      Email: [],
      Content: ['', [validatorRequired]],
      idFeedback: [],
    });
    this.loadData();

    const item = {
      idAdmin: localStorage.getItem('idUser'),
      isActive: 'true'

    }
    this.httpService.getRoleAdmin(item).subscribe((data: any) => {
      // console.log(data);
      if (data == '0' || data == '3') this.check = true; else this.check = false;

    });
  }
  loadData() {
    this.httpService.getAllFeedback().subscribe((data: any) => {
      // console.log(data);
      this.listFeedback = data;
      this.list = data;

       console.log(this.list);
    });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  search() {

    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe((item: any) => {
        const result = item.toUpperCase();
        console.log(this.list);
        this.listFeedback = this.list.filter(item => (item.contentFeedback.toUpperCase().includes(result) || item.emailFeedback.toUpperCase().includes(result)
          || item.titleFeedback.toUpperCase().includes(result)));
      });
    // do something
    // console.log(event.target.value) ;
    // const key = event.target.value;
    // this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.includes(key) || item.emailAdmin.includes(key)));

  }

  sendMail(data) {
    this.sendForm = this.formBuilder.group({
      Email: data.emailFeedback,
      Content: ['', [validatorRequired]],
      idFeedback: data.idFeedbackAdmin,
    });
  }

  submitMail() {
    const item = {
      email: this.sendForm.value.Email,
      content: this.sendForm.value.Content,
      idFeedback: this.sendForm.value.idFeedback
    }
    console.log(item);

    // this.httpService.sendMail(item).subscribe(result:any)
    // this.httpService.sendMail(item).subscribe(result:any)
    this.httpService.sendMail(JSON.stringify(item)).subscribe((data: any) => { });
    this.showNotification('success', 'Reply successfully');
    // this.loadData();
    $('#close-button-edit').click();
    const a = this.list.findIndex(f=>f.idFeedbackAdmin == item.idFeedback)
    this.list[a].isReply = true;
    this.listFeedback = this.list;
    


  }

}
