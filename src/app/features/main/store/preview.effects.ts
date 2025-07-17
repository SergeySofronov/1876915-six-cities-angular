import { of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { previewsActions } from './preview.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PreviewService } from '../services';

@Injectable()
export class PreviewEffects {
  private readonly actions$ = inject(Actions);
  private readonly previewService = inject(PreviewService);

  loadPreviews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(previewsActions.loadPreviews),
      switchMap(() =>

        this.previewService.getPreviews().pipe(
          map((previews) => previewsActions.loadPreviewsSuccess({ previews })),
          catchError((error) => of(previewsActions.loadPreviewsFailure({ error })))
        )
      )
    )
  });
}
