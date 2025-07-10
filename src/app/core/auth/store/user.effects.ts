import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userActions } from './user.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { HistoryService } from '@shared/services';
import { ApiRoute } from '@app/const';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private router = inject(Router);
  private readonly historyService = inject(HistoryService);

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.checkAuth),
      switchMap(() =>
        this.userService.checkAuth().pipe(
          map((user) => userActions.checkAuthSuccess({ user })),
          catchError((error) => of(userActions.checkAuthFailure({ error })))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      switchMap(({ authData }) =>
        this.userService.login(authData).pipe(
          map((user) => userActions.loginSuccess({ user })),
          catchError((error) => of(userActions.loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.loginSuccess),
        tap(() => {
          this.historyService.back();
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.logout),
      switchMap(() =>
        this.userService.logout().pipe(
          map(() => userActions.logoutSuccess()),
          catchError((error) => of(userActions.logoutFailure({ error })))
        )
      )
    )
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.logoutSuccess),
        tap(() => {
          this.router.navigate([ApiRoute.Login]);
        })
      ),
    { dispatch: false }
  );
}
