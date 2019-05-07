import { Component, OnInit } from '@angular/core';
import { arrPostProduct } from '../../services/local_database/post-product';
import {AuthGuardService} from '../../services/auth/auth-guard.service';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  isPostProduct = false;
  txtPostProduct = 'Post Product';
  constructor(private authGuard: AuthGuardService, private http: HttpService) { }

  ngOnInit() {
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }

  isCompanyAccount() {
    return localStorage.getItem('role') === 'ROLE_COMPANY';
  }

  changeIsPostProduct() {
    if (!this.isPostProduct) {
      this.isPostProduct = true;
      this.txtPostProduct = 'Show timeline';
    } else {
      this.isPostProduct = false;
      this.txtPostProduct = 'Post Product';
    }
  }
}
