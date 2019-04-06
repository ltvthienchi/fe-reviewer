import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Broadcaster } from '../broadcaster/broadcaster.service';

@Injectable()
export class EventMessage {

  constructor(private broadcaster: Broadcaster) {}

  fire(data: any): void {
    this.broadcaster.broadcast(MessageEvent, data);
  }

  on(): Observable<any> {
    return this.broadcaster.on<string>(MessageEvent);
  }

}
