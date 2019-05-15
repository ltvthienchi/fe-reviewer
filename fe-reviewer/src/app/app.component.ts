import {Component, OnInit} from '@angular/core';
import { EventMessage} from './services/event_message/event-message.service';
import { Broadcaster } from './services/broadcaster/broadcaster.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: any = '';

  constructor(private broadcaster: Broadcaster, private eventMessage: EventMessage) {}

  ngOnInit() {
    this.registerTypeBroadcast();
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
