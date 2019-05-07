import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floatFixed'
})
export class FloatFixedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Number.parseFloat(value).toFixed(1);
  }

}
