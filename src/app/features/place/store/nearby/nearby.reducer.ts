import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { PlacePreview } from '@core/models';
import { nearbyActions } from './nearby.actions';

export interface NearbyState {
  places: PlacePreview[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialNearbyState: NearbyState = {
  places: [],
  isLoading: false,
  error: null
};

export const nearbyReducer = createReducer(
  initialNearbyState,
  on(nearbyActions.loadNearby, (state): NearbyState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(nearbyActions.loadNearbySuccess, (state, { places }): NearbyState => ({
    ...state,
    places,
    isLoading: false,
    error: null
  })),
  on(nearbyActions.loadNearbyFailure, (state, { error }): NearbyState => ({
    ...state,
    isLoading: false,
    error
  }))
);
