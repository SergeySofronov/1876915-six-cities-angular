import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NearbyService } from '../../services';
import { catchError, map, of, switchMap } from 'rxjs';
import { nearbyActions } from './nearby.actions';

@Injectable()
export class NearbyEffects {
  private actions$ = inject(Actions);
  private nearbyService = inject(NearbyService);

 loadNearby$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(nearbyActions.loadNearby),
      switchMap(({ id }) =>
        this.nearbyService.getNearby(id).pipe(
          map((places) => nearbyActions.loadNearbySuccess({ places })),
          catchError((error) => of(nearbyActions.loadNearbyFailure({ error })))
        )
      )
    )
  }
  );
}
