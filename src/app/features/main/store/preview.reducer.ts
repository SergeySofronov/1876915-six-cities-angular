import { createReducer, on } from '@ngrx/store';
import { previewsActions } from './preview.actions';
import { PlacePreview } from '@core/models';
import { HttpErrorResponse } from '@angular/common/http';

export interface PreviewsState {
  previews: PlacePreview[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialPreviewsState: PreviewsState = {
  previews: [],
  isLoading: false,
  error: null
};

export const previewsReducer = createReducer(
  initialPreviewsState,

  on(previewsActions.loadPreviews, (state): PreviewsState => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(previewsActions.loadPreviewsSuccess, (state, { previews }): PreviewsState => ({
    ...state,
    previews,
    isLoading: false,
    error: null
  })),
  on(previewsActions.loadPreviewsFailure, (state, { error }): PreviewsState => ({
    ...state,
    isLoading: false,
    error
  }))
);
