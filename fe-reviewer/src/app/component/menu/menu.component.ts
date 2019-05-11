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
  constructor(private authGuard: AuthGuardService, private router: Router,
              private data: DataService, private http: HttpService,private avatarService: AvatarService,
              private elementRef: ElementRef) {
      const localCount = JSON.parse(JSON.stringify(sessionStorage.getItem('numbProduct')));
      if (localCount) { this.count = localCount; }
      this.idUser = localStorage.getItem('idUser');
      this.role_user = localStorage.getItem('role');
  }

  ngOnInit() {
    if (this.idUser) {
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

}
