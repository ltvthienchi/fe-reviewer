import {EventEmitter, Injectable, Output} from '@angular/core';


@Injectable()
export class DataService {

  count = 0;
  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  increaseProduct() {
    this.count++;
    sessionStorage.setItem('numbProduct', this.count.toString());
    this.change.emit(this.count);
  }
  decreaseProduct() {
    this.count--;
    sessionStorage.setItem('numbProduct', this.count.toString());
    this.change.emit(this.count);
  }

}
