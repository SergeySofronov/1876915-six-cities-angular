import { createReducer, on } from '@ngrx/store';
import { DEFAULT_CITY } from '@app/const';
import { MarkerType } from '@core/models';
import { markerActions } from './marker.actions';

export interface MarkerState {
  activeMarker: MarkerType;
}

export const initialMarkerState: MarkerState = {
  activeMarker: DEFAULT_CITY
};

export const markerReducer = createReducer(
  initialMarkerState,
  on(markerActions.setActiveMarker, (state, { marker }): MarkerState => ({
    ...state,
    activeMarker: marker
  }))
);


