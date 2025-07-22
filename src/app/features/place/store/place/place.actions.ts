import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { Place } from '@core/models';
import { SliceNameSpace } from '@app/const';

export enum PlaceEvents {
  LoadPlace = 'Load place',
  LoadPlaceSuccess = 'Load place success',
  LoadPlaceFailure = 'Load place failure',
}

export const placeActions = createActionGroup({
  source: SliceNameSpace.Place,
  events: {
    [PlaceEvents.LoadPlace]: props<{ id: string }>(),
    [PlaceEvents.LoadPlaceSuccess]: props<{ place: Place }>(),
    [PlaceEvents.LoadPlaceFailure]: props<{ error: HttpErrorResponse }>(),
  }
});
