import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http/http.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  private emailReviewer: string;
  private firstName: string;
  private fullName: string;
  private lastName: string;
  private genderReviewer: number;
  private dobReviewer: string;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.emailReviewer = localStorage.getItem('email');
    this.fullName = localStorage.getItem('fullName');
    this.httpService.getReviewerInfo(this.emailReviewer).subscribe( (data: any) => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.genderReviewer = data.gender;
      this.dobReviewer = data.dateOfBirth;
    });
  }
  checkGender() {
    if (this.genderReviewer === 1) {
      return true;
    }
    return false;
  }

}
