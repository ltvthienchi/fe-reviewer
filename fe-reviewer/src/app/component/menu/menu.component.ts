import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardService} from '../../services/auth/auth-guard.service';
import {ContentPostComponent} from '../home/content-post/content-post.component';
import { DataService } from '../../services/data-service/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private fullName: string;
  count: number;
  constructor(private authGuard: AuthGuardService, private router: Router, private data: DataService) {
    this.fullName = localStorage.getItem('fullName');
  }

  ngOnInit() {
    this.data.change.subscribe(count => {
      this.count = count;
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
  }

  isCompany() {
    return this.authGuard.isCompany();
  }

}
