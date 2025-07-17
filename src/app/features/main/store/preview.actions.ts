import { HttpErrorResponse } from '@angular/common/http';
import { SliceNameSpace } from '@app/const';
import { PlacePreview } from '@core/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export enum PreviewsEvents {
  LoadPreviews = 'Load previews',
  LoadPreviewsSuccess = 'Load previews success',
  LoadPreviewsFailure = 'Load previews failure',
}

export const previewsActions = createActionGroup({
  source: `${SliceNameSpace.Previews}-Previews`,
  events: {
    [PreviewsEvents.LoadPreviews]: emptyProps(),
    [PreviewsEvents.LoadPreviewsSuccess]: props<{ previews: PlacePreview[] }>(),
    [PreviewsEvents.LoadPreviewsFailure]: props<{ error: HttpErrorResponse }>(),
  }
});
