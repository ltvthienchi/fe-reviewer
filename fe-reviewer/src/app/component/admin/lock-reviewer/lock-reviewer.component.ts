import { Component, OnInit } from '@angular/core';
import { arrCompany } from '../../../services/local_database/company';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {arrReviewer} from '../../../services/local_database/reviewer';
import { NotifierService } from 'angular-notifier';
import { HttpService } from '../../../services/http/http.service';
import { b } from '@angular/core/src/render3';
import { FormControl } from '@angular/forms';

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
  listReviewerlc: any[];
  listCompanylc: any[];
  listReviewer : any[];
  listCompany : any[];
  check: boolean;
  queryField: FormControl = new FormControl();

  constructor(private route: ActivatedRoute,private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.typeUser = params['userType'] === 'business';
      this.typeUser ? this.data = arrCompany : this.data = arrReviewer;
    });
    this.getdata();
    const item = {
      idAdmin:localStorage.getItem('idUser'),
      isActive:'true'
  
    }
    this.httpService.getRoleAdmin(item).subscribe((data: any) => {
     // console.log(data);
     if(data == '0' || data == '1') this.check=true; else this.check=false;
      
    });
  }

  getdata(){
    this.httpService.getAllBusiness().subscribe((data: any) => {
      this.listCompanylc = data;
      this.listCompany = data;
      console.log(this.listCompany);
    });
    this.httpService.getAllReviewer().subscribe((data: any) => {
      this.listReviewer = data;
      this.listReviewerlc = data;
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

  search() { 

    this.queryField.valueChanges
        .debounceTime(200)
        .distinctUntilChanged()
        .subscribe((item: any) => {
          const result = item.toUpperCase();
          this.listCompany = this.listCompanylc.filter(item => 
            (item.nameCompany.toUpperCase().includes(result) || item.emailCompany.toUpperCase().includes(result) ||
             item.webCompany.toUpperCase().includes(result) || item.addrCompany.toUpperCase().includes(result)));
            //  console.log(this.listCompany);
            //  console.log(result);
             this.listReviewer = this.listReviewerlc.filter(item => 
              (item.email.toUpperCase().includes(result) || item.fullName.toUpperCase().includes(result)));

        });
    // do something
    // console.log(event.target.value) ;
    // const key = event.target.value;
    // this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.includes(key) || item.emailAdmin.includes(key)));

  }


}
