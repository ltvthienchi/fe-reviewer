import {Component, OnInit} from '@angular/core';
import { EventMessage} from './services/event_message/event-message.service';
import { Broadcaster } from './services/broadcaster/broadcaster.service';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {IdUserService} from './services/data-global/id-user.service';
import {JwtHelperService} from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: any = '';
  linkRouter;

  constructor(private broadcaster: Broadcaster, private eventMessage: EventMessage, private router: Router,
              private idUser: IdUserService, private jwtHelper: JwtHelperService) {}

  ngOnInit() {
    console.log(this.router.url);
    console.log(window.location.toString());
    this.registerTypeBroadcast();
    this.setIdUser();
    // $('button').click(() => {
    //   this.eventMessage.fire(true);
    //   setTimeout(() => {
    //     this.eventMessage.fire(false);
    //   }, 2000);
    // })
  }

  setIdUser() {
    let self = this;
    const tokenDecoded = this.jwtHelper.decodeToken(localStorage.getItem('userToken'));
    setTimeout(function () {
      console.log('=====>', tokenDecoded.idUser);
      self.idUser.fire(tokenDecoded.idUser);
    }, 1000);
  }

  registerTypeBroadcast() {
    let setTimeInterval;
    this.eventMessage.on()
      .subscribe(checkLoading => {
        // this.message = message;
        if (checkLoading) {
          this.message = 'Loading ';
          setTimeInterval = setInterval(() => {
            this.message = this.message.concat('.');
          }, 500);
        } else {
          this.message = '';
          clearInterval(setTimeInterval);
        }
      });
  }
}
