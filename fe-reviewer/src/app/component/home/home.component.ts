import {Component, OnInit} from '@angular/core';
import {NotifierService} from 'angular-notifier';
import { Broadcaster } from '../../services/broadcaster/broadcaster.service';
import { EventMessage } from '../../services/event_message/event-message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private notifier: NotifierService;
  toggleButton: boolean = false;

  public constructor(notifier: NotifierService, private broad: Broadcaster, private eventMessage: EventMessage) {
    this.notifier = notifier;
  }


  ngOnInit() {
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
