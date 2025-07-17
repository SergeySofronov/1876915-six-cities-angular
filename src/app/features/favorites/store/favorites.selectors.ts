
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.reducer';
import { SliceNameSpace } from '@app/const';

// Feature selector
export const selectFavoritesState = createFeatureSelector<FavoritesState>(SliceNameSpace.Favorites);

export const selectFavorites = createSelector(
  selectFavoritesState,
  (state) => state.favorites
);

export const selectFavoritesLoading = createSelector(
  selectFavoritesState,
  (state) => state.isLoading
);

export const selectFavoritesError = createSelector(
  selectFavoritesState,
  (state) => state.error
);

export const selectIsFavorite = (placeId: string) => createSelector(
  selectFavorites,
  (favorites) => favorites.some((favorite) => favorite.id === placeId)
);

export const selectPlaceFavoriteLoading = (placeId: string) => createSelector(
  selectFavoritesState,
  (state) => state.placeFavoriteStatus[placeId]?.isLoading ?? false
);
