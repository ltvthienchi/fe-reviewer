import { Component, OnInit } from '@angular/core';
import { arrPostProduct } from '../../services/local_database/post-product';
import {AuthGuardService} from '../../services/auth/auth-guard.service';
import {HttpService} from '../../services/http/http.service';
import {ActivatedRoute} from '@angular/router';

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
  private idCompany: string;
  private detailCompany: any;
  private lstPost = [];
  isPostProduct = false;
  txtPostProduct = 'Post Product';

  constructor(private authGuard: AuthGuardService, private http: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.detailCompany = {
      idCompany: '',
      nameCompany: '',
      addrCompany: '',
      webCompany: '',
      telCompany: '',
      imgAvatarCompany: '',
      imgPanelCompany: '',
      emailCompany: '',
      avgRatingComp: 0
    };
    this.idCompany = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.getDetailCompany(this.idCompany).subscribe( (data: any) => {
      if (data) {
        this.detailCompany = data.company;
        data.lstPost.map(item => {
          item.idReviewer = localStorage.getItem('idUser');
          this.lstPost.push(item);
        });
      }
    });
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
      this.http.getDetailCompany(this.idCompany).subscribe( (data: any) => {
        this.lstPost = [];
        if (data) {
          this.detailCompany = data.company;
          data.lstPost.map(item => {
            item.idReviewer = localStorage.getItem('idUser');
            this.lstPost.push(item);
          });
        }
      });
    }
  }
}
