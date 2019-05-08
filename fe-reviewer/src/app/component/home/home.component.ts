import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Broadcaster } from '../../services/broadcaster/broadcaster.service';
import { EventMessage } from '../../services/event_message/event-message.service';
import * as $ from 'jquery';

import { arrPostProduct } from '../../services/local_database/post-product';
import {CompanyService} from '../../services/company-service/company.service';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class HomeComponent implements OnInit {

  private notifier: NotifierService;
  toggleButton: boolean = false;
  toggleRating = true;

  invert = false;
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = true;
  value = 1;

  myData = [];
  dataPost = [];
  dataCompany = [];
  dataProduct = [];

  public constructor(notifier: NotifierService, private broad: Broadcaster,
                     private eventMessage: EventMessage, private httpService: HttpService) {
      this.notifier = notifier;
  }

  ngOnInit() {
    Promise.all([
      this.getAllPost(),
    ]).then(res => {
      this.dataPost.map(item => {
        item.idReviewer = localStorage.getItem('idUser');
        this.myData.push(item);
      });
    });

  }

  getAllPost() {
    return new Promise(resolve => {
      this.httpService.getAllPost().subscribe(res => {
        if (res) { this.dataPost = res; }
        resolve();
      });
    });
  }

  // getCompany() {
  //   return new Promise(resolve => {
  //     this.httpService.getAllCompany().subscribe(res => {
  //       if (res) {
  //         this.dataCompany = res;
  //       }
  //       resolve();
  //     });
  //   });
  // }

  // getProduct() {
  //   return new Promise(resolve => {
  //     this.httpService.getAllProduct().subscribe(res => {
  //       if (res) {
  //         this.dataProduct = res;
  //       }
  //       resolve();
  //     });
  //   });
  // }

  toggleRatings(id) {
    console.log(id);
    if (this.toggleRating) {
      let idItem = '#' + id;
      $('.container-ratting').css('display', 'inline');
      let offsetLeft = $('#quang-cao').offset()['left'] - 30;
      let offsetTop = $(idItem).offset()['top'] ;
      let width = $('#quang-cao').width();
      $('.container-ratting').offset({top: offsetTop, left: offsetLeft}).width(width + 30);
      console.log(offsetLeft, offsetTop);
    } else {
      $('.container-ratting').css('display', 'none');
    }
    this.toggleRating = !this.toggleRating
  }

  sendMess() {
    this.toggleButton = !this.toggleButton;
    let arr = this.toggleButton ? [1,2,3,4,5] : [];
    this.eventMessage.fire(this.toggleButton);
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }


  public hideOldestNotification(): void {
    this.notifier.hideOldest();
  }

  public hideNewestNotification(): void {
    this.notifier.hideNewest();
  }

  public hideAllNotifications(): void {
    this.notifier.hideAll();
  }

  public showSpecificNotification(type: string, message: string, id: string): void {
    this.notifier.show({id, message, type});
  }

  public hideSpecificNotification(id: string): void {
    this.notifier.hide(id);
  }

}
