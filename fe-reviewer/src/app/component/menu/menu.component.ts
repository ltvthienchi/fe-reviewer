import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardService} from '../../services/auth/auth-guard.service';
import { DataService } from '../../services/data-service/data.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {HttpService} from '../../services/http/http.service';
import {AvatarService} from '../../services/avatar-service/avatar.service';
import * as $ from 'jquery';
import {IdUserService} from '../../services/data-global/id-user.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private fullName: string;
  private avatar: string;
  private idUser: string;
  private role_user: string;
  private htmlToAdd: string;
  results: any[] = [];
  queryField: FormControl = new FormControl();
  count: number;
  isCheckOut = false;
  firstClick = true;
  constructor(private authGuard: AuthGuardService, private router: Router,
              private data: DataService, private http: HttpService,private avatarService: AvatarService,
              private elementRef: ElementRef,private idUserSer: IdUserService) {
      const localCount = JSON.parse(JSON.stringify(sessionStorage.getItem('numbProduct')));
      if (localCount) { this.count = localCount; }
      this.role_user = localStorage.getItem('role');
  }

  ngOnInit() {
    this.idUser = this.idUserSer.getId();
    if (this.idUser != null && this.idUser !== '') {
      const loginRequest = {
        idUser : this.idUser,
        role_user : this.role_user
      };
      this.http.getLoginInfo(loginRequest).subscribe((data: any) => {
        this.fullName = data.fullName;
        this.avatar = data.avatar;
      });
    }
    this.data.change.subscribe(count => {
      this.count = count;
    });

    this.avatarService.change.subscribe(img => {
      this.avatar = img;
    });
    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap((query) =>  this.http.search(query))
      .subscribe((result: any) => {
        if (result) {
          this.results = result;
        }
      });
  }

  search() {
    if(this.firstClick) {
      this.queryField.valueChanges
        .debounceTime(200)
        .distinctUntilChanged()
        .switchMap((query) =>  this.http.search(query))
        .subscribe((result: any) => {
          if (result) {
            this.results = result;
            this.firstClick = false;
          }
        });
    }
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }
  removeToken() {
    localStorage.removeItem('userToken');
    // this.router.navigate(['/']);
    localStorage.removeItem('role');
    localStorage.removeItem('fullName');
    localStorage.removeItem('isActive');
    localStorage.removeItem('idUser');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  isCompany() {
    return this.authGuard.isCompany();
  }

  focusOutFunction() {
    this.results = [];
  }

  focusOnFunction(e) {
    let link = 'detail-product/:' + e;
    this.router.navigate([link]);
  }

  findProduct(idProduct) {
    // [routerLink]="'/detail-product/' + result.idProduct"
    if($('#dropdownProduct').hasClass('show')) {
      $('#dropdownProduct').removeClass('show');
    }
    const url = '/detail-product/' + idProduct;
    this.router.navigateByUrl(url);
    // console.log(url);
    // this.router.url(url);
  }

  showSubcription() {
    const role = localStorage.getItem('role');
    if (role === 'ROLE_NORMAL') {
      return true;
    } else {
      return false;
    }
  }

}
