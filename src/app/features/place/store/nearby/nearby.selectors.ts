import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NearbyState } from './nearby.reducer';

export const selectNearbyState = createFeatureSelector<NearbyState>('nearby');

export const selectNearbyPlaces = createSelector(
  selectNearbyState,
  (state) => state.places
);

export const selectNearbyLoading = createSelector(
  selectNearbyState,
  (state) => state.isLoading
);

export const selectNearbyError = createSelector(
  selectNearbyState,
  (state) => state.error
);
