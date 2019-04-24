import { Component, OnInit } from '@angular/core';
import { arrPostProduct } from '../../services/local_database/post-product';
import {AuthGuardService} from '../../services/auth/auth-guard.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  value = 5;
  max = 5;
  min = 0.5;
  step = 0.5;

  myData = arrPostProduct;
  constructor(private authGuard: AuthGuardService) { }

  ngOnInit() {
  }
  checkAuthGuard() {
    return this.authGuard.canActivate();
  }
  isCommpanyAccount() {
    const type_reviewer = localStorage.getItem('typeRev');
    // Company Account
    if (type_reviewer === '1') {
      return true;
    } else {
      // Reviewer Account
      return false;
    }
  }

}
