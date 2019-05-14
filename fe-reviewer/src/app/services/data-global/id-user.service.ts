import { Injectable } from '@angular/core';
import {Broadcaster} from '../broadcaster/broadcaster.service';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class IdUserService {
  constructor(private broadcaster: Broadcaster, private http: HttpService) {}

  fire(data): void {
    console.log(data);
    this.broadcaster.broadcast('id', data);
  }

  on(): Observable<any> {
    return this.broadcaster.on<string>('id');
  }

}
