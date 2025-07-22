import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlaceState } from './place.reducer';
import { SliceNameSpace } from '@app/const';
import { Signal } from '@angular/core';

export const selectPlaceState = createFeatureSelector<PlaceState>(SliceNameSpace.Place);

export const selectPlaceById = (id: Signal<string>) => createSelector(
  selectPlaceState,
  (state) => id && (state.place?.id === id()) ? state.place : null
);

export const selectPlaceLoading = createSelector(
  selectPlaceState,
  (state) => state.isLoading
);

export const selectPlaceError = createSelector(
  selectPlaceState,
  (state) => state.error
);
