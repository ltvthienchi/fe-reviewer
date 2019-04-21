import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Broadcaster } from '../../services/broadcaster/broadcaster.service';
import { EventMessage } from '../../services/event_message/event-message.service';
import * as $ from 'jquery';
import { Options } from 'ng5-slider';
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

  myValue: 1;
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };

  public constructor(notifier: NotifierService, private broad: Broadcaster, private eventMessage: EventMessage) {
    this.notifier = notifier;
  }

  ngOnInit() {
    // let witdhQC = $('#quang-cao').width();
    let offsetLeft = $('#quang-cao').offset()['left'] - 31;
    let offsetTop = $('#content-image-1').offset()['top'] + 7;
    let width = $('#quang-cao').width();
    $('.container-ratting').offset({top: offsetTop, left: offsetLeft}).width(width + 30);
    console.log(offsetLeft, offsetTop);
    // $('.container-ratting').width(witdhQC);
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
