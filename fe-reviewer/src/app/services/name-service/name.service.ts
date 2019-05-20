import { Injectable } from '@angular/core';
import {Broadcaster} from '../broadcaster/broadcaster.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NameService {
  constructor(private broadcaster: Broadcaster) {}

  fire(data: any): void {
    this.broadcaster.broadcast(NameService, data);
  }

  on(): Observable<any> {
    return this.broadcaster.on<string>(NameService);
  }
}
