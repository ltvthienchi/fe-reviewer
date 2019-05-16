import { Component, OnInit } from '@angular/core';
import {arrFeedback} from '../../../services/local_database/feedback';
import {NotifierService} from 'angular-notifier';
import {FormBuilder, FormGroup} from '@angular/forms';
import {validatorRequired} from '../../../services/validator/validator';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.component.html',
  styleUrls: ['./feedback-admin.component.css']
})
export class FeedbackAdminComponent implements OnInit {
  private notifier: NotifierService;
  listFeedback = [] ;
  FeedbackForm: FormGroup;
  validatorForm = {
    FeedbackForm: true
  };

  data = arrFeedback;

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.FeedbackForm = this.formBuilder.group({
      listFeedback: ['', [validatorRequired]],
    });

    this.httpService.getAllFeedback().subscribe((data: any) => {
      console.log(data);
      this.listFeedback = data;
    });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

}
