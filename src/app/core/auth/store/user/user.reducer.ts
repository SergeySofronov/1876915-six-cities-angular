import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';
import { LoggedUser } from '@core/models';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserState {
  user: LoggedUser | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialUserState: UserState = {
  user: null,
  isLoading: false,
  error: null
};

export const userReducer = createReducer(
  initialUserState,

  // Check Auth
  on(userActions.checkAuth, (state): UserState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(userActions.checkAuthSuccess, (state, { user }): UserState => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),
  on(userActions.checkAuthFailure, (state, { error }): UserState => ({
    ...state,
    isLoading: false,
    error
  })),

  // Login
  on(userActions.login, (state): UserState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(userActions.loginSuccess, (state, { user }): UserState => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),
  on(userActions.loginFailure, (state, { error }): UserState => ({
    ...state,
    isLoading: false,
    error
  })),

  // Logout
  on(userActions.logout, (state): UserState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(userActions.logoutSuccess, (state): UserState => ({
    ...state,
    user: null,
    isLoading: false,
    error: null
  })),
  on(userActions.logoutFailure, (state, { error }): UserState => ({
    ...state,
    isLoading: false,
    error
  }))
);
