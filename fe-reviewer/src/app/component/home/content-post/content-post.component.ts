import { Component, OnInit, Input } from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {NotifierService} from 'angular-notifier';
import * as $ from 'jquery';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit {

  @Input() item;
  private notifier: NotifierService;
  toggleButton: boolean = false;
  toggleRating = true;

  invert = false;
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = true;
  value = 1;
  constructor(private authGuard: AuthGuardService) { }

  ngOnInit() {
  }

  checkAuthGuard() {
    return this.authGuard.canActivate();
  }

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

}
