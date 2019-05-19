import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private http: HttpService) {
  }

  product;
  comment;
  rating;
  reviewer;
  company
  ngOnInit() {
    this.http.getAllCounts().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        switch (data[i].nameChart) {
          case 'COMPANY': this.company = data[i].valueChart; break;
          case 'PRODUCT': this.product = data[i].valueChart; break;
          case 'COMMENT': this.comment = data[i].valueChart; break;
          case 'REVIEWER': this.reviewer = data[i].valueChart; break;
          case 'RATING': this.rating = data[i].valueChart; break;
        }
      }
    });
  }

}
