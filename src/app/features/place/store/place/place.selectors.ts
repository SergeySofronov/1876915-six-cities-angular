import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlaceState } from './place.reducer';

export const selectPlaceState = createFeatureSelector<PlaceState>('place');

export const selectPlace = createSelector(
  selectPlaceState,
  (state) => state.place
);

export const selectPlaceLoading = createSelector(
  selectPlaceState,
  (state) => state.isLoading
);

export const selectPlaceError = createSelector(
  selectPlaceState,
  (state) => state.error
);
