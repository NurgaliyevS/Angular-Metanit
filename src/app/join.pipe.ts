import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(array: any, start?: any, end?: any) {
    let result = array;

    if (start) {
      if (end) {
        result = array.slice(start, end);
      } else {
        result = array.slice(start, result.length);
      }
    }

    return result.join(', ');
  }
}
