import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { PlacePreview } from '@core/models';
import { SliceNameSpace } from '@app/const';

export enum NearbyEvents {
  LoadNearby = 'Load nearby',
  LoadNearbySuccess = 'Load nearby success',
  LoadNearbyFailure = 'Load nearby failure',
}

export const nearbyActions = createActionGroup({
  source: SliceNameSpace.Nearby,
  events: {
    [NearbyEvents.LoadNearby]: props<{ id: string }>(),
    [NearbyEvents.LoadNearbySuccess]: props<{ places: PlacePreview[] }>(),
    [NearbyEvents.LoadNearbyFailure]: props<{ error: HttpErrorResponse }>(),
  }
});
