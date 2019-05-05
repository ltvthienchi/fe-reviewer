import { Component, OnInit } from '@angular/core';
import {
  validatorConfirmPassword,
  validatorEmail,
  validatorRequired,
  validatorPassword,
  validatorName, validatorPhone, validatorWebsite
} from '../../../services/validator/validator';
import {FeedbackWebsite} from '../../../model/feedbackWebsite.model';
import { NotifierService } from 'angular-notifier';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
@Component({
  selector: 'app-feedback-reviewer',
  templateUrl: './feedback-reviewer.component.html',
  styleUrls: ['./feedback-reviewer.component.css']
})
export class FeedbackReviewerComponent implements OnInit {
  private notifier: NotifierService;
  feedbackForm: FormGroup;
  validatorForm = {
    feedbackForm: true
  };
  constructor(private formBuilder: FormBuilder, private httpService: HttpService, notifier: NotifierService) {
this.notifier = notifier;}

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      titleFeedback: ['', [validatorRequired]],
      contentFeedback: ['', [validatorRequired]],
      
    });
  }
  submitFeedbackForm() {
    if (this.feedbackForm.status === 'INVALID') {
      this.validatorForm.feedbackForm = false;
      // console.log(this.normalUserForm);
    } else {
      this.validatorForm.feedbackForm = true;
      // this.userService.registerUser(this.validatorForm.value)
      const feedback: FeedbackWebsite = {
        titleFeedback: this.feedbackForm.value.titleFeedback,
        contentFeedback: this.feedbackForm.value.contentFeedback,
        email: localStorage.getItem('email'),
        role: localStorage.getItem('role')
        
      };
      this.httpService.feedbackWebsite(feedback).subscribe((data: any) => {
        if (data.status === 'SUCCESS') {
          this.showNotification( 'success', 'Send feedback successfully' );
          this.feedbackForm.reset();
        } else {
          this.showNotification( 'error', data.result );
        }
      });
    }
  }
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

}
