import { Component, OnInit } from '@angular/core';
import { arrCompany } from '../../../services/local_database/company';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {arrReviewer} from '../../../services/local_database/reviewer';

@Component({
  selector: 'app-lock-reviewer',
  templateUrl: './lock-reviewer.component.html',
  styleUrls: ['./lock-reviewer.component.css']
})
export class LockReviewerComponent implements OnInit {

  arrTypeUser = ['business', 'reviewer'];
  data;
  typeUser;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.typeUser = params['userType'] === 'business';
      this.typeUser ? this.data = arrCompany : this.data = arrReviewer;
    });
  }

}
