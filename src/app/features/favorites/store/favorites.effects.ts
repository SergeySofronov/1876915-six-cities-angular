import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { favoritesActions } from './favorites.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { FavoritesService } from '@features/favorites/services';

@Injectable()
export class FavoritesEffects {
  private actions$ = inject(Actions);
  private favoritesService = inject(FavoritesService);

  loadFavorites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(favoritesActions.loadFavorites),
      switchMap(() =>
        this.favoritesService.getFavorites().pipe(
          map((favorites) => favoritesActions.loadFavoritesSuccess({ favorites })),
          catchError((error) => of(favoritesActions.loadFavoritesFailure({ error })))
        )
      )
    );
  });

  changeFavoriteStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(favoritesActions.changeFavoriteStatus),
      switchMap(({ placeId, status }) =>
        this.favoritesService.changeFavoriteStatus(placeId, status).pipe(
          map((response) => favoritesActions.changeFavoriteStatusSuccess({ response })),
          catchError((error) => of(favoritesActions.changeFavoriteStatusFailure({ error, placeId })))
        )
      )
    );
  });
}
