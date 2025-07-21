import { createActionGroup, props } from '@ngrx/store';
import { MarkerType } from '@core/models';
import { SliceNameSpace } from '@app/const';

export enum MarkerEvents {
  SetActiveMarker = 'Set active marker'
}

export const markerActions = createActionGroup({
  source: SliceNameSpace.Marker,
  events: {
    [MarkerEvents.SetActiveMarker]: props<{ marker: MarkerType }>()
  }
});
