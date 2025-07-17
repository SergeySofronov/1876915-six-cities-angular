import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { placeActions } from './place.actions';
import { PlaceService } from '../../services';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class PlaceEffects {
  private actions$ = inject(Actions);
  private placeService = inject(PlaceService);

  loadPlace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(placeActions.loadPlace),
      switchMap(({ id }) =>
        this.placeService.getPlace(id).pipe(
          map((place) => placeActions.loadPlaceSuccess({ place })),
          catchError((error) => of(placeActions.loadPlaceFailure({ error })))
        )
      )
    )
  }
  );


}
