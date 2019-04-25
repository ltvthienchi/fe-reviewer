import { Component, OnInit } from '@angular/core';
import {arrFeedback} from '../../../services/local_database/feedback';

@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.component.html',
  styleUrls: ['./feedback-admin.component.css']
})
export class FeedbackAdminComponent implements OnInit {

  data = arrFeedback;

  constructor() { }

  ngOnInit() {
  }

}
