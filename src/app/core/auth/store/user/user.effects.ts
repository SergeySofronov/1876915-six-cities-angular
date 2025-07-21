import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userActions } from './user.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HistoryService } from '@shared/services';
import { ApiRoute } from '@app/const';
import { JwtService } from '../../services';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private jwtService = inject(JwtService);
  private router = inject(Router);
  private readonly historyService = inject(HistoryService);

  checkAuth$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.checkAuth),
      switchMap(() =>
        this.userService.checkAuth().pipe(
          map((user) => userActions.checkAuthSuccess({ user })),
          catchError((error) => of(userActions.checkAuthFailure({ error })))
        )
      )
    )
  }
  );

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.login),
      switchMap(({ authData }) =>
        this.userService.login(authData).pipe(
          map((user) => userActions.loginSuccess({ user })),
          catchError((error) => of(userActions.loginFailure({ error })))
        )
      )
    )
  }
  );

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.loginSuccess),
        tap(({ user }) => {
          this.jwtService.saveToken(user.token);
          this.historyService.back();
        })
      )
    },
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.loginFailure),
        tap(() => {
          this.jwtService.dropToken();
        })
      )
    },
    { dispatch: false }
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.logout),
      switchMap(() =>
        this.userService.logout().pipe(
          map(() => userActions.logoutSuccess()),
          catchError((error) => of(userActions.logoutFailure({ error })))
        )
      )
    )
  }
  );

  logoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.logoutSuccess),
        tap(() => {
          this.jwtService.dropToken();
          this.router.navigate([ApiRoute.Login]);
        })
      )
    },
    { dispatch: false }
  );
}
