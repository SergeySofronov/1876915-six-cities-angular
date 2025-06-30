import { Directive, inject } from '@angular/core';
import { HistoryService } from '@shared/services';

@Directive({
  selector: '[appGoBack]',
  host: {
    '(click)': 'goBack($event)',
  }
})
export class GoBackDirective {

  private readonly navigationService = inject(HistoryService);

  goBack(event: Event) {
    if(event.currentTarget !== event.target){
      return;
    }

    this.navigationService.back();
  }
}
