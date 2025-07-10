


import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthData, LoggedUser } from '@core/models';
import { SliceNameSpace } from '@app/const';

export enum UserEvents {
  CheckAuth = 'Check Auth',
  CheckAuthSuccess = 'Check Auth Success',
  CheckAuthFailure = 'Check Auth Failure',

  Login = 'Login',
  LoginSuccess = 'Login Success',
  LoginFailure = 'Login Failure',

  Logout = 'Logout',
  LogoutSuccess = 'Logout Success',
  LogoutFailure = 'Logout Failure',
}

export const userActions = createActionGroup({
  source: `[${SliceNameSpace.User}]`,
  events: {
    [UserEvents.CheckAuth]: emptyProps(),
    [UserEvents.CheckAuthSuccess]: props<{ user: LoggedUser }>(),
    [UserEvents.CheckAuthFailure]: props<{ error: unknown }>(),

    [UserEvents.Login]: props<{ authData: AuthData }>(),
    [UserEvents.LoginSuccess]: props<{ user: LoggedUser }>(),
    [UserEvents.LoginFailure]: props<{ error: unknown }>(),

    [UserEvents.Logout]: emptyProps(),
    [UserEvents.LogoutSuccess]: emptyProps(),
    [UserEvents.LogoutFailure]: props<{ error: unknown }>(),
  }
});
