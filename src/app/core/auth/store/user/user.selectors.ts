
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { SliceNameSpace } from '@app/const';

// Feature selector для User state
export const selectUserState = createFeatureSelector<UserState>(SliceNameSpace.User);

export const selectLoggedUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectIsUserLoading = createSelector(
  selectUserState,
  (state) => state.isLoading
);

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);

export const selectIsUserLoggedIn = createSelector(
  selectLoggedUser,
  (user) => !!user
);


