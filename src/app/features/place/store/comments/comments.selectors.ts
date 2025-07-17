import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentsState } from './comments.reducer';

export const selectCommentsState = createFeatureSelector<CommentsState>('comments');

export const selectComments = createSelector(
  selectCommentsState,
  (state) => state.comments
);

export const selectCommentsLoading = createSelector(
  selectCommentsState,
  (state) => state.isLoading
);

export const selectCommentsError = createSelector(
  selectCommentsState,
  (state) => state.error
);

