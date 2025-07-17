


import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ChangeFavoritesResponse, PlacePreview } from '@core/models';
import { SliceNameSpace } from '@app/const';
import { HttpErrorResponse } from '@angular/common/http';

export enum FavoritesEvents {
  LoadFavorites = 'Load favorites',
  LoadFavoritesSuccess = 'Load favorites success',
  LoadFavoritesFailure = 'Load favorites failure',

  ChangeFavoriteStatus = 'Change favorite status',
  ChangeFavoriteStatusSuccess = 'Change favorite status success',
  ChangeFavoriteStatusFailure = 'Change favorite status failure',
}

export const favoritesActions = createActionGroup({
  source: `${SliceNameSpace.Favorites}`,
  events: {
    [FavoritesEvents.LoadFavorites]: emptyProps(),
    [FavoritesEvents.LoadFavoritesSuccess]: props<{ favorites: PlacePreview[] }>(),
    [FavoritesEvents.LoadFavoritesFailure]: props<{ error: HttpErrorResponse }>(),

    [FavoritesEvents.ChangeFavoriteStatus]: props<{ placeId: string; status: boolean }>(),
    [FavoritesEvents.ChangeFavoriteStatusSuccess]: props<{ response: ChangeFavoritesResponse }>(),
    [FavoritesEvents.ChangeFavoriteStatusFailure]: props<{ error: HttpErrorResponse; placeId: string }>(),
  }
});
