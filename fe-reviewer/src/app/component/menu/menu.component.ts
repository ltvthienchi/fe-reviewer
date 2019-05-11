import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardService} from '../../services/auth/auth-guard.service';
import { DataService } from '../../services/data-service/data.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {HttpService} from '../../services/http/http.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private fullName: string;
  private avatar: string;
  private idUser: string;
  results: any[] = [];
  queryField: FormControl = new FormControl();
  count: number;
  constructor(private authGuard: AuthGuardService, private router: Router,
              private data: DataService, private http: HttpService ) {
    const localCount = JSON.parse(JSON.stringify(sessionStorage.getItem('numbProduct')));
    if (localCount) {
      this.count = localCount;
    }
    this.idUser = localStorage.getItem('idUser');
  }

  ngOnInit() {
    this.http.getInforLogin(this.idUser).subscribe((data: any) => {
      this.fullName = data.fullName;
      this.avatar = data.avatar;
    });

    this.data.change.subscribe(count => {
      this.count = count;
    });

    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap((query) =>  this.http.search(query))
      .subscribe(result => {
        if (result) {
          console.log(result);
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

}
