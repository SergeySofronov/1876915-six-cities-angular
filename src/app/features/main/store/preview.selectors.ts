import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PreviewsState } from './preview.reducer';
import { SliceNameSpace } from '@app/const';

// Feature selector для previews
export const selectPreviewsState = createFeatureSelector<PreviewsState>(
  SliceNameSpace.Previews
);

export const selectPreviews = createSelector(
  selectPreviewsState,
  (state) => state.previews
);

export const selectPreviewsLoading = createSelector(
  selectPreviewsState,
  (state) => state.isLoading
);

export const selectPreviewsError = createSelector(
  selectPreviewsState,
  (state) => state.error
);
