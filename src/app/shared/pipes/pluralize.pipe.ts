import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(word?: string, count?: number): string {
    if (!word) {
      return '';
    }

    if (!count) {
      return word;
    }

    return count === 1 ? word : `${word}s`;
  }
}
