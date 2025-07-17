


import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthData, LoggedUser } from '@core/models';
import { SliceNameSpace } from '@app/const';
import { HttpErrorResponse } from '@angular/common/http';

export enum UserEvents {
  CheckAuth = 'Check auth',
  CheckAuthSuccess = 'Check auth success',
  CheckAuthFailure = 'Check auth failure',

  Login = 'Login',
  LoginSuccess = 'Login success',
  LoginFailure = 'Login failure',

  Logout = 'Logout',
  LogoutSuccess = 'Logout success',
  LogoutFailure = 'Logout failure',
}

export const userActions = createActionGroup({
  source: `${SliceNameSpace.User}`,
  events: {
    [UserEvents.CheckAuth]: emptyProps(),
    [UserEvents.CheckAuthSuccess]: props<{ user: LoggedUser }>(),
    [UserEvents.CheckAuthFailure]: props<{ error: HttpErrorResponse }>(),

    [UserEvents.Login]: props<{ authData: AuthData }>(),
    [UserEvents.LoginSuccess]: props<{ user: LoggedUser }>(),
    [UserEvents.LoginFailure]: props<{ error: HttpErrorResponse }>(),

    [UserEvents.Logout]: emptyProps(),
    [UserEvents.LogoutSuccess]: emptyProps(),
    [UserEvents.LogoutFailure]: props<{ error: HttpErrorResponse }>(),
  }
});
