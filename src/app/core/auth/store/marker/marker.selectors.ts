import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarkerState } from './marker.reducer';
import { SliceNameSpace } from '@app/const';

export const selectMarkerState = createFeatureSelector<MarkerState>(SliceNameSpace.Marker);

export const selectActiveMarker = createSelector(
  selectMarkerState,
  (state) => state.activeMarker
);
