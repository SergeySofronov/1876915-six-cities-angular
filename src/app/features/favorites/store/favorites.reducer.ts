import { createReducer, on } from '@ngrx/store';
import { favoritesActions } from './favorites.actions';
import { PlacePreview } from '@core/models';
import { HttpErrorResponse } from '@angular/common/http';

export interface FavoritesState {
  favorites: PlacePreview[];
  placeFavoriteStatus: Record<string, { isLoading: boolean }>
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialFavoritesState: FavoritesState = {
  favorites: [],
  placeFavoriteStatus: {},
  isLoading: false,
  error: null
};

export const favoritesReducer = createReducer(
  initialFavoritesState,

  // Загрузка избранного
  on(favoritesActions.loadFavorites, (state): FavoritesState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(favoritesActions.loadFavoritesSuccess, (state, { favorites }): FavoritesState => ({
    ...state,
    favorites,
    isLoading: false,
    error: null
  })),
  on(favoritesActions.loadFavoritesFailure, (state, { error }): FavoritesState => ({
    ...state,
    isLoading: false,
    error
  })),

  // Изменение статуса избранного
  on(favoritesActions.changeFavoriteStatus, (state, { placeId }): FavoritesState => ({
    ...state,
    placeFavoriteStatus: {
      ...state.placeFavoriteStatus,
      [placeId]: { isLoading: true },
    }
  })),
  on(favoritesActions.changeFavoriteStatusSuccess, (state, { response }): FavoritesState => {

    const newState = {
      ...state,
      isLoading: false,
      error: null,
      placeFavoriteStatus: {
        ...state.placeFavoriteStatus,
        [response.id]: { isLoading: false },
      }
    };

    if (!response.isFavorite) {
      newState.favorites = state.favorites.filter((item) => item.id !== response.id);
      return newState;
    }

    const place = state.favorites.find((item) => item.id === response.id);
    if (!place) {
      newState.favorites = state.favorites.concat(response);
    }

    return newState;
  }),
  on(favoritesActions.changeFavoriteStatusFailure, (state, { error, placeId }): FavoritesState => ({
    ...state,
    placeFavoriteStatus: {
      ...state.placeFavoriteStatus,
      [placeId]: { isLoading: false },
    },
    isLoading: false,
    error
  }))
);
