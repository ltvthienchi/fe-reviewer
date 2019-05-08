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
  private lstPost: any;
  myData = [];

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
        const newItem = {
          idPostProduct: null,
          idProduct: null,
          idCompany: null,
          nameCompany: null,
          content: null,
          image: '../../assets/wallpaper/loginWall.jpg',
          avatar: '',
          avgDisplay: 1,
          avgPerformance: 1,
          avgCamera: 1,
          avgBattery: 1,
          avgDesign: 1,
          totalComment: 1,
          infoBattery: '',
          infoDisplay: '',
          infoPerformance: '',
          infoDesign: '',
          infoCamera: '',
          dtCreated: null,
          idReviewer: ''
        };
        for (let i = 0; i < data.lstPost.length; i++) {
          newItem.idPostProduct = data.lstPost[i].idPostProduct;
          newItem.idProduct = data.lstPost[i].idProduct;
          newItem.idCompany = data.lstPost[i].idCompany;
          newItem.nameCompany = data.lstPost[i].nameCompany;
          newItem.content = data.lstPost[i].content;
          newItem.image = data.lstPost[i].image;
          newItem.avatar = data.lstPost[i].avatar;
          newItem.avgDisplay = data.lstPost[i].avgDisplay;
          newItem.avgPerformance = data.lstPost[i].avgPerformance;
          newItem.avgCamera = data.lstPost[i].avgCamera
          newItem.avgBattery = data.lstPost[i].avgBattery;
          newItem.avgDesign = data.lstPost[i].avgDesign;
          newItem.totalComment = data.lstPost[i].totalComment;
          newItem.infoBattery = data.lstPost[i].infoBattery;
          newItem.infoDisplay = data.lstPost[i].infoDisplay;
          newItem.infoPerformance = data.lstPost[i].infoPerformance;
          newItem.infoDesign = data.lstPost[i].infoDesign;
          newItem.infoCamera = data.lstPost[i].infoCamera;
          newItem.dtCreated = data.lstPost[i].dtCreated;
          newItem.idReviewer = localStorage.getItem('idUser');
          this.myData.push(newItem);
        }
        this.lstPost = this.myData;
      }
    });
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }

  isCompanyAccount() {
    return localStorage.getItem('role') === 'ROLE_COMPANY';
  }


}
