import {EventEmitter, Injectable, Output} from '@angular/core';
import {Broadcaster} from '../broadcaster/broadcaster.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AvatarService {

  avatar: string;
  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor(private broadcaster: Broadcaster) {}

  fire(data: any): void {
    this.broadcaster.broadcast(AvatarService, data);
  }

  on(): Observable<any> {
    return this.broadcaster.on<string>(AvatarService);
  }
  changeAvaImage(image) {
    this.change.emit(image);
  }

}
