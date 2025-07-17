import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { PlacePreview } from '@core/models';

export const nearbyActions = createActionGroup({
  source: 'Place-Nearby',
  events: {
    'Load Nearby': props<{ id: string }>(),
    'Load Nearby Success': props<{ places: PlacePreview[] }>(),
    'Load Nearby Failure': props<{ error: HttpErrorResponse }>(),
  }
});
