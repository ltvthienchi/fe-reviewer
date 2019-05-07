import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {arrPostProduct} from '../../../services/local_database/post-product';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

  constructor(private authGuard: AuthGuardService) { }
  myData = arrPostProduct;

  ngOnInit() {
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }
  isCommpanyAccount() {
    const type_reviewer = localStorage.getItem('role');
    // Company Account
    if (type_reviewer === 'ROLE_COMPANY') {
      return true;
    } else {
      // Reviewer Account
      return false;
    }
  }
}
