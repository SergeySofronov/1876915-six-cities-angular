import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(word: string, count: number): string {
    return count === 1 ? word : `${word}s`;
  }
}
