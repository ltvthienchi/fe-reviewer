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
    });
  }

  checkClass(index) {
    if (index === 1) return 'material-icons no-1';
    if (index === 2) return 'material-icons no-2';
    if (index === 3) return 'material-icons no-3';
    if (index >= 4) return 'material-icons no-4';
  }

  checkIcon(index) {
    if (index > 3) return 'filter_4';
    else return 'filter_'+index;
  }

}
