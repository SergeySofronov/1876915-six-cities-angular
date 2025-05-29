// import { store } from '../store/index.js';
import { AuthorizationStatus } from '../app.const.js';
import { MarkerType, Place, PlacePreview } from './place.js';
import { PlaceComment } from './comment.js';

// export interface State = ReturnType<typeof store.getState>;
// export interface AppDispatch = typeof store.dispatch;

export interface UserState {
  authorizationStatus: AuthorizationStatus;
  loginStatus: RequestStatus;
};

export interface MarkerState {
  activeMarker: MarkerType;
}

export interface CommentsState {
  commentsFetchStatus: RequestStatus;
  commentsCreateStatus: RequestStatus;
  comments: PlaceComment[];
}

export interface FavoriteState {
  favoritesFetchStatus: RequestStatus;
  changeFavoriteStatus: Record<string, RequestStatus>;
  favorites: PlacePreview[];
}

export interface PlaceState {
  previewsFetchStatus: RequestStatus;
  placeFetchStatus: RequestStatus;
  nearbyFetchStatus: RequestStatus;
  previews: PlacePreview[];
  place: Place | null;
  nearbyPreviews: PlacePreview[] | [];
}

export enum RequestStatus {
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected',
}

