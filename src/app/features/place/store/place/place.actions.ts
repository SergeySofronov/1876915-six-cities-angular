import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { Place } from '@core/models';

export const placeActions = createActionGroup({
  source: 'Place-Place',
  events: {
    'Load Place': props<{ id: string }>(),
    'Load Place Success': props<{ place: Place }>(),
    'Load Place Failure': props<{ error: HttpErrorResponse }>(),
  }
});
