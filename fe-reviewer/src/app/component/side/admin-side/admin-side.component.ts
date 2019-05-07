import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css']
})
export class AdminSideComponent implements OnInit {

  private fullName: string;
  constructor() {
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
  }

}
