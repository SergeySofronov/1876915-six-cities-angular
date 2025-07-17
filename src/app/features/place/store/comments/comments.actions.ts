import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { CreatePlaceComment, PlaceComment } from '@core/models';
import { SliceNameSpace } from '@app/const';

export enum PlaceCommentsEvents {
  LoadComments = 'Load comments',
  LoadCommentsSuccess = 'Load comments success',
  LoadCommentsFailure = 'Load comments failure',
  AddComment = 'Add comment',
  AddCommentSuccess = 'Add comment success',
  AddCommentFailure = 'Add comment failure',
}

export const commentActions = createActionGroup({
  source: SliceNameSpace.Comments,
  events: {
    [PlaceCommentsEvents.LoadComments]: props<{ id: string }>(),
    [PlaceCommentsEvents.LoadCommentsSuccess]: props<{ comments: PlaceComment[] }>(),
    [PlaceCommentsEvents.LoadCommentsFailure]: props<{ error: HttpErrorResponse }>(),
    [PlaceCommentsEvents.AddComment]: props<{ comment: CreatePlaceComment }>(),
    [PlaceCommentsEvents.AddCommentSuccess]: props<{ comment: PlaceComment }>(),
    [PlaceCommentsEvents.AddCommentFailure]: props<{ error: HttpErrorResponse }>(),
  }
});

