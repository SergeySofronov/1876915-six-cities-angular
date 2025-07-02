import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(word: string): string {
    return word?.replace(/^./i, (char) => char.toUpperCase());
  }
}
