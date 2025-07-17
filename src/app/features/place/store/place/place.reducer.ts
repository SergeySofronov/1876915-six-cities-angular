import { createReducer, on } from '@ngrx/store';
import { placeActions } from './place.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Place } from '@core/models';

export interface PlaceState {
  place: Place | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialPlaceState: PlaceState = {
  place: null,
  isLoading: false,
  error: null
};

export const placeReducer = createReducer(
  initialPlaceState,
  on(placeActions.loadPlace, (state): PlaceState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(placeActions.loadPlaceSuccess, (state, { place }): PlaceState => ({
    ...state,
    place,
    isLoading: false,
    error: null
  })),
  on(placeActions.loadPlaceFailure, (state, { error }): PlaceState => ({
    ...state,
    isLoading: false,
    error
  }))
);
