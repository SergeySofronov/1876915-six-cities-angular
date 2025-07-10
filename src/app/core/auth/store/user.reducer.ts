import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';
import { LoggedUser } from '@core/models';

export interface UserState {
  user: LoggedUser | null;
  isLoading: boolean;
  error: unknown | null;
}

export const initialUserState: UserState = {
  user: null,
  isLoading: false,
  error: null
};

export const userReducer = createReducer(
  initialUserState,

  // Check Auth
  on(userActions.checkAuth, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(userActions.checkAuthSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),
  on(userActions.checkAuthFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Login
  on(userActions.login, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(userActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),
  on(userActions.loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Logout
  on(userActions.logout, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(userActions.logoutSuccess, (state) => ({
    ...state,
    user: null,
    isLoading: false,
    error: null
  })),
  on(userActions.logoutFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);
