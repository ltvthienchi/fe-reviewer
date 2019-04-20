import { Component } from '@angular/core';
import { EventMessage} from './services/event_message/event-message.service';
import { Broadcaster } from './services/broadcaster/broadcaster.service';
import * as $ from 'jquery';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: any = '';

  constructor(private broadcaster: Broadcaster, private eventMessage: EventMessage, private router: Router) {}

  ngOnInit() {
    this.registerTypeBroadcast();
    // $('button').click(() => {
    //   this.eventMessage.fire(true);
    //   setTimeout(() => {
    //     this.eventMessage.fire(false);
    //   }, 2000);
    // })
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

  setToken() {
    localStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTU1NzY3OTM1LCJleHAiOjE1NTU3Njc5MzV9.GGQF-wQ6QYCyZHDZC_qRoCGkV_sNOUCsZFtj74Gva8w'
    );
    this.router.navigate(['home']);
  }

  removeToken() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
