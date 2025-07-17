import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor, errorInterceptor, tokenInterceptor } from '@core/interceptors';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { SliceNameSpace } from './app.const';
import { initialCommentsState, commentsReducer, initialNearbyState, nearbyReducer, initialPlaceState, placeReducer, NearbyEffects, PlaceEffects, CommentEffects } from '@features/place/store';
import { initialUserState, userReducer, UserEffects, markerReducer, initialMarkerState } from '@core/auth/store';
import { initialFavoritesState, favoritesReducer, FavoritesEffects } from '@features/favorites/store';
import { initialPreviewsState, PreviewEffects, previewsReducer } from '@features/main/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      tokenInterceptor,
      errorInterceptor,
      baseUrlInterceptor,
    ])),
    provideStore(),
    provideState(SliceNameSpace.User, userReducer, { initialState: initialUserState }),
    provideState(SliceNameSpace.Place, placeReducer, { initialState: initialPlaceState }),
    provideState(SliceNameSpace.Favorites, favoritesReducer, { initialState: initialFavoritesState }),
    provideState(SliceNameSpace.Previews, previewsReducer, { initialState: initialPreviewsState }),
    provideState(SliceNameSpace.Comments, commentsReducer, { initialState: initialCommentsState }),
    provideState(SliceNameSpace.Nearby, nearbyReducer, { initialState: initialNearbyState }),
    provideState(SliceNameSpace.Marker, markerReducer, { initialState: initialMarkerState }),
    provideEffects([UserEffects, PlaceEffects, PreviewEffects, FavoritesEffects, NearbyEffects, CommentEffects]),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
