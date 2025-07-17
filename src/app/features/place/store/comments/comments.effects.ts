import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { commentActions } from './comments.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { CommentService } from '../../services';

@Injectable()
export class CommentEffects {
  private actions$ = inject(Actions);
  private commentService = inject(CommentService);

  loadComments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commentActions.loadComments),
      switchMap(({ id }) =>
        this.commentService.getComments(id).pipe(
          map((comments) => commentActions.loadCommentsSuccess({ comments })),
          catchError((error) => of(commentActions.loadCommentsFailure({ error })))
        )
      )
    )
  }
  );
}
