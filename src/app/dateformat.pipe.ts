import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(date: Date | string, format: string = 'dd MMM, yyyy'): string {
    return new DatePipe('en-US').transform(date, format)!;
  }

}
