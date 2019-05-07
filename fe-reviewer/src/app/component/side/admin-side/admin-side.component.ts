import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css']
})
export class AdminSideComponent implements OnInit {

  private fullName: string;
  constructor(private router: Router) {
    this.fullName = localStorage.getItem('fullName');
  }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('userToken');
    // this.router.navigate(['/']);
    localStorage.removeItem('role');
    localStorage.removeItem('fullName');
    localStorage.removeItem('isActive');
    localStorage.removeItem('idUser');
    localStorage.removeItem('email');
    this.router.navigate(['/']);
  }

}
