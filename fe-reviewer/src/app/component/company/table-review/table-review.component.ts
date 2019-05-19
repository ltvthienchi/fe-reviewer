import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {Router} from '@angular/router';
import {IdUserService} from '../../../services/data-global/id-user.service';
import {MatDialog} from '@angular/material';
import {HttpService} from '../../../services/http/http.service';
import {ReviewCompanyComponent} from '../review-company/review-company.component';

@Component({
  selector: 'app-table-review',
  templateUrl: './table-review.component.html',
  styleUrls: ['./table-review.component.css']
})
export class TableReviewComponent implements OnInit {
  @Input() idCompany: any;
  @Output() eventAction: EventEmitter<any> = new EventEmitter();
  idUser;
  currentRate:number = 0;
  curTotalReview: number = 0;

  constructor(private authGuard: AuthGuardService, private router: Router, private userService: IdUserService,
              public dialog: MatDialog, private http: HttpService) { }

  ngOnInit() {
    this.idUser = this.userService.getId();
    this.getData();
  }

  getData() {
    this.http.getReviewCompanyById(this.idCompany).subscribe(res => {
      if(res.length > 0) {
        let temp = 0;
        res.map(item => {
          temp += item.numbRating;
        });
        this.currentRate = temp / res.length;
        this.curTotalReview = res.length;
      }
    })
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }

  isCompanyRole() {
    return localStorage.getItem('role') === 'ROLE_COMPANY';
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
      if(res) {
        this.getData();
        this.eventAction.emit({code: 'update'});
      }
    })
  }

}
