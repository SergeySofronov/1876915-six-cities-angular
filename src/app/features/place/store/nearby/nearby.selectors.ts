import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NearbyState } from './nearby.reducer';
import { MAX_SHOWN_NEAR_PLACES, SliceNameSpace } from '@app/const';

export const selectNearbyState = createFeatureSelector<NearbyState>(SliceNameSpace.Nearby);

export const selectNearbyPlaces = createSelector(
  selectNearbyState,
  (state) => (state.places ?? []).slice(0, MAX_SHOWN_NEAR_PLACES)
);

export const selectNearbyLoading = createSelector(
  selectNearbyState,
  (state) => state.isLoading
);

export const selectNearbyError = createSelector(
  selectNearbyState,
  (state) => state.error
);
