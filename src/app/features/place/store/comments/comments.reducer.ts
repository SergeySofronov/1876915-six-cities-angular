import { createReducer, on } from '@ngrx/store';
import { commentActions } from './comments.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { PlaceComment } from '@core/models';

export interface CommentsState {
  comments: PlaceComment[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialCommentsState: CommentsState = {
  comments: [],
  isLoading: false,
  error: null
};

export const commentsReducer = createReducer(
  initialCommentsState,
  on(commentActions.loadComments, (state): CommentsState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(commentActions.loadCommentsSuccess, (state, { comments }): CommentsState => ({
    ...state,
    comments,
    isLoading: false,
    error: null
  })),
  on(commentActions.loadCommentsFailure, (state, { error }): CommentsState => ({
    ...state,
    isLoading: false,
    error
  }))
);

