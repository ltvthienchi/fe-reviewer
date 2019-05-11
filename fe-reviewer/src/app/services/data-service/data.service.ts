import {EventEmitter, Injectable, Output} from '@angular/core';


@Injectable()
export class DataService {

  count = 0;
  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor() {
    const localCount = JSON.parse(JSON.stringify(sessionStorage.getItem('numbProduct')));
    if (localCount) {
      this.count = localCount;
    }
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
