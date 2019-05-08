import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-top-company',
  templateUrl: './top-company.component.html',
  styleUrls: ['./top-company.component.css']
})
export class TopCompanyComponent implements OnInit {

  private lstData: any;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getListTopRating().subscribe(res => {
      if (res) {
        this.lstData = res;
      }
    });
  }

}
