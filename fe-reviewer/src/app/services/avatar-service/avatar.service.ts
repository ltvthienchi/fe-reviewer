import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class AvatarService {

  avatar: string;
  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  changeAvaImage(image) {
    this.change.emit(image);
  }

}
