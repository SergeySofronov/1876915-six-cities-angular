import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { PlaceComment } from '@core/models';

export const commentActions = createActionGroup({
  source: 'Place-Comments',
  events: {
    'Load Comments': props<{ id: string }>(),
    'Load Comments Success': props<{ comments: PlaceComment[] }>(),
    'Load Comments Failure': props<{ error: HttpErrorResponse }>(),
  }
});

