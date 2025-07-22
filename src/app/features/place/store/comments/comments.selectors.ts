import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentsState } from './comments.reducer';
import { SliceNameSpace } from '@app/const';

export const selectCommentsState = createFeatureSelector<CommentsState>(SliceNameSpace.Comments);

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

