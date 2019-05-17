import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Broadcaster } from '../../services/broadcaster/broadcaster.service';
import { EventMessage } from '../../services/event_message/event-message.service';
import * as $ from 'jquery';

import { arrPostProduct } from '../../services/local_database/post-product';
import {CompanyService} from '../../services/company-service/company.service';
import {HttpService} from '../../services/http/http.service';
import {IdUserService} from '../../services/data-global/id-user.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class HomeComponent implements OnInit {

  private notifier: NotifierService;
  myData = [];
  dataPost = [];
  idUser;

  public constructor(notifier: NotifierService, private broad: Broadcaster,private router: Router,
                     private eventMessage: EventMessage, private httpService: HttpService, private idUserSer: IdUserService) {
      this.notifier = notifier;
  }

  ngOnInit() {
    $(document).ready(function () {
      $('html,body').animate({ scrollTop: 0 }, 'normal');
    });
    this.idUser = this.idUserSer.getId();
    return this.getAllPost();

  }

  getAllPost() {
    return new Promise(resolve => {
      this.httpService.getAllPost().subscribe(res => {
        if (res) {
          this.dataPost = res;
          this.myData = [];
          this.dataPost.map(item => {
            item.idReviewer = this.idUser;
            this.myData.push(item);
          });
        }
        resolve();
      });
    });
  }

  eventAction(e) {
    if(e.code === 'delete') { return this.getAllPost(); }
    if(e.code === 'edit') this.router.navigateByUrl('company/' + e.data.idCompany + '/' + e.data.idProduct);
  }
}
