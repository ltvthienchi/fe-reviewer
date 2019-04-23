import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddmmyyyy'
})
export class DdmmyyyyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = new Date(value);
    let day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  }

}
