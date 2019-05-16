import { Component, OnInit } from '@angular/core';
import { arrCompany } from '../../../services/local_database/company';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {arrReviewer} from '../../../services/local_database/reviewer';
import { NotifierService } from 'angular-notifier';
import { HttpService } from '../../../services/http/http.service';
import { b } from '@angular/core/src/render3';

@Component({
  selector: 'app-lock-reviewer',
  templateUrl: './lock-reviewer.component.html',
  styleUrls: ['./lock-reviewer.component.css']
})
export class LockReviewerComponent implements OnInit {
  private notifier: NotifierService;
  arrTypeUser = ['business', 'reviewer'];
  data;
  typeUser;
  listReviewer : any[];
  listCompany : any[];
  listAccount : any[];


  constructor(private route: ActivatedRoute,private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.typeUser = params['userType'] === 'business';
      this.typeUser ? this.data = arrCompany : this.data = arrReviewer;
    });
    this.getdata();
  }

  getdata(){
    this.httpService.getAllBusiness().subscribe((data: any) => {
      this.listCompany = data;
      console.log(this.listCompany);
    });
    this.httpService.getAllReviewer().subscribe((data: any) => {
      this.listReviewer = data;
      console.log(this.listReviewer);
    });
  }

  lock(data){
    const item = {
      idUser: data.idAccount,
      isActive: !data.active
    }
    this.httpService.changeActiveAccount(item).subscribe((data: any) => {
      this.getdata();
    });
  }
}
