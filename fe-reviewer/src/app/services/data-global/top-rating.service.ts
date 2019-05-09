import { Injectable } from '@angular/core';
import {Broadcaster} from '../broadcaster/broadcaster.service';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../http/http.service';

@Injectable()
export class TopRatingService {

  constructor(private broadcaster: Broadcaster, private http: HttpService) {}

  fire(): void {
    this.http.getListTopRating().subscribe(res => {
      this.broadcaster.broadcast(TopRatingService, res);
    })
  }

  on(): Observable<any> {
    return this.broadcaster.on<string>(TopRatingService);
  }

}
