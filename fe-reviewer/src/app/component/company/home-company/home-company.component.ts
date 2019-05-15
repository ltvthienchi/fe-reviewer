import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {Router} from '@angular/router';
import {IdUserService} from '../../../services/data-global/id-user.service';

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


  constructor(private authGuard: AuthGuardService, private router: Router, private userService: IdUserService) { }

  ngOnInit() {
    this.idUser = this.userService.getId();
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }

  isCompanyAccount() {
    return localStorage.getItem('role') === 'ROLE_COMPANY' && this.idCompany === this.idUser;
  }


  checkEventAction(e) {
    if(e.code === 'delete') { this.eventAction.emit({code: 'delete', data: null}) }
    if(e.code === 'edit') this.router.navigateByUrl('company/' + e.data.idCompany + '/' + e.data.idProduct);
  }
}
