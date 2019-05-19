import { Component, OnInit } from '@angular/core';
import { arrPostProduct } from '../../services/local_database/post-product';
import {AuthGuardService} from '../../services/auth/auth-guard.service';
import {HttpService} from '../../services/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import {IdUserService} from '../../services/data-global/id-user.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {MatDialog} from '@angular/material';
import {ReviewCompanyComponent} from './review-company/review-company.component';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private idUser;
  private idCompany: string;
  private isFollowed: boolean;
  private idProduct: string;
  private detailCompany: any = {
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
  private lstPost = [];
  isPostProduct = false;
  isViewReview = false;
  txtPostProduct = 'Post Product';
  txtViewReview = ' History Review';

  constructor(private authGuard: AuthGuardService, private http: HttpService, private activatedRoute: ActivatedRoute,
              private idUserSer: IdUserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idCompany = params['id'];
      this.idProduct = params['idProduct'];
      this.idUser = this.idUserSer.getId();
      this.initialiseState(); // reset and set based on new parameter this time
    });

  }

  initialiseState() {
    const self = this;
    this.isPostProduct = false;
    this.isViewReview = false;
    this.txtPostProduct = 'Post Product';
    this.txtViewReview = ' History Review';
    this.getData();
    this.checkIsFollow(this.idCompany);
    $(document).ready(function () {
      $('html,body').animate({ scrollTop: 0 }, 'normal');
      if(self.idProduct) {
        $('.menucpn').find('.active').removeClass('active');
        $('#timeline').removeClass('active show');
        $('#createAndEdit').addClass('active show');
        $('#changeCreateProduct').addClass('active');
      }
    });
  }

  getData() {
    this.http.getDetailCompany(this.idCompany).subscribe( (data: any) => {
      if (data) {
        this.lstPost = [];
        this.detailCompany = data.company;
        data.lstPost.map(item => {
          item.idReviewer = this.idUser;
          this.lstPost.push(item);
        });
      }
    });
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }

  isCompanyAccount() {
    return localStorage.getItem('role') === 'ROLE_COMPANY' && this.idCompany === this.idUser;
  }

  isCompanyRole() {
    return localStorage.getItem('role') === 'ROLE_COMPANY';
  }

  changeIsPostProduct() {
    if (!this.isPostProduct) {
      this.isPostProduct = true;
      this.txtPostProduct = 'Show Timeline';
    } else {
      this.router.navigateByUrl('/company/'+this.idCompany);
      this.isPostProduct = false;
      this.txtPostProduct = 'Post Product';
      this.getData();
    }
  }

  changeViewReviewer() {
    this.isPostProduct = false;
    this.txtPostProduct = 'Post Product';
    this.isViewReview = !this.isViewReview;
    this.isViewReview ? this.txtViewReview = ' Show Timeline' : this.txtViewReview = ' History Review';
  }

  checkIsFollow(idCompany) {
    const requestObj = {
      idCompany: this.idCompany,
      idUser: localStorage.getItem('idUser')
    };
    const request = JSON.stringify(requestObj);
    this.http.checkIsFollow(request).subscribe( (data: any) => {
        this.isFollowed = data;
    });
  }

  followCompany(idCompany, type) {
    let isFollow: boolean;
    if (type === 'follow') {
      isFollow = true;
    } else {
      isFollow = false;
    }
    const requestData = {
      idCompany: idCompany,
      idFollower: localStorage.getItem('idUser'),
      isFollow: isFollow
    };
    const requestString = JSON.stringify(requestData);
    this.http.followCompany(requestString).subscribe( (data: any) => {
      if (data.status === 'SUCCESS') {
        this.isFollowed = isFollow;
      }
    });
  }

  checkEventAction(e) {
    if(e.code === 'delete') this.getData();
    if(e.code === 'update') this.getData();
  }

  resetButton(e) {
    if(this.idProduct) {
      this.router.navigateByUrl('/company/'+this.idCompany);
    }
    this.getData();
  }

}
