import {Component, OnInit} from '@angular/core';
import { EventMessage} from './services/event_message/event-message.service';
import { Broadcaster } from './services/broadcaster/broadcaster.service';
import * as $ from 'jquery';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: any = '';
  linkRouter;

  constructor(private broadcaster: Broadcaster, private eventMessage: EventMessage, private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    console.log(window.location.toString());
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
}
