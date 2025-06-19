import { Directive, inject } from '@angular/core';
import { NavigationService } from '@shared';

@Directive({
  selector: '[appGoBack]',
  host: {
    '(click)': 'goBack($event)',
  }
})
export class GoBackDirective {

  private readonly navigationService = inject(NavigationService);

  goBack(event: Event) {
    if(event.currentTarget !== event.target){
      return;
    }

    this.navigationService.back();
  }
}
