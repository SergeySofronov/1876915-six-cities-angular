import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor, tokenInterceptor } from '@core/interceptors';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { SliceNameSpace } from './app.const';
import { initialUserState, userReducer } from '@core/auth/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      tokenInterceptor,
      errorInterceptor,
    ])),
    provideStore(),
    provideState(SliceNameSpace.User, userReducer, { initialState: initialUserState }),
    // !!! remove to lazy-routes?
    // provideState(SliceNameSpace.Place, placeReducer, { initialState: initialPlaceState }),
    // provideState(SliceNameSpace.Favorites, favoritesReducer, { initialState: initialFavoritesState }),
    // provideState(SliceNameSpace.Comments, commentsReducer, { initialState: initialCommentsState }),
    // provideState(SliceNameSpace.Marker, markerReducer, { initialState: initialMarkerState }),
    provideEffects([]),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
