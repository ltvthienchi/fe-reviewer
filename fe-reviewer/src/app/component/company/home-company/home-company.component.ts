import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IdUserService} from '../../../services/data-global/id-user.service';
import {ReviewCompanyComponent} from '../review-company/review-company.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

  @Input('items') lstPro: any;
  @Input() idCompany: any;
  @Output() eventAction: EventEmitter<any> = new EventEmitter();
  idUser;
  currentRate:number = 4.30;

  constructor(private authGuard: AuthGuardService, private router: Router, private userService: IdUserService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.idUser = this.userService.getId();
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


  checkEventAction(e) {
    if(e.code === 'delete') { this.eventAction.emit({code: 'delete', data: null}) }
    if(e.code === 'edit') this.router.navigateByUrl('company/' + e.data.idCompany + '/' + e.data.idProduct);
  }


  showReview() {
    const data = {
      idCompany: this.idCompany
    };
    const myDialog = this.dialog.open(ReviewCompanyComponent, {
      width: '450px',
      data: data
    });

    myDialog.afterClosed().subscribe(res => {
      console.log(res);
    })
  }
}
