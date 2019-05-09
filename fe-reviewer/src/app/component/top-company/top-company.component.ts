import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {TopRatingService} from '../../services/data-global/top-rating.service';

@Component({
  selector: 'app-top-company',
  templateUrl: './top-company.component.html',
  styleUrls: ['./top-company.component.css']
})
export class TopCompanyComponent implements OnInit {

  private lstData = [];
  constructor(private http: HttpService, private topRating: TopRatingService) { }

  ngOnInit() {
    this.topRating.fire();
    this.getDataRating();
  }

  getDataRating() {
    this.topRating.on().subscribe(res => {
      this.lstData = res;
      console.log(this.lstData);
    })
  }

}
