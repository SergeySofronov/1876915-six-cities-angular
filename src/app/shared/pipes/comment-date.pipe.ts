import { Pipe, PipeTransform } from '@angular/core';
import { MONTH_NAMES } from '@app/const';

@Pipe({
  name: 'commentDate'
})
export class CommentDatePipe implements PipeTransform {

  transform(dateString: string): string {
    const date = new Date(dateString);
    const month = date.getMonth();
    const humanMonth = MONTH_NAMES[month];
    const dayNumber = date.getDay();
    const day = dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`;

    return `${humanMonth} ${date.getFullYear()}, ${day}-${month}-${date.getFullYear()}`;
  }
}
