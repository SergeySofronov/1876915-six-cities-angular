import { Routes } from '@angular/router';
import { AppRoute } from './app.const';
import { isAuthorizedGuardFn, isNotAuthorizedGuardFn } from '@core/auth/guards';

export const routes: Routes = [
  {
    title: '6 Cities',
    path: AppRoute.Main,
    loadComponent: () => import('./features/main/pages/main-page/main-page.component').then((c) => c.MainPageComponent),
  },
  {
    title: '6 Cities - Login',
    path: AppRoute.Login,
    canLoad: [isNotAuthorizedGuardFn],
    canActivate: [isNotAuthorizedGuardFn],
    loadComponent: () => import('./features/login/pages/login-page/login-page.component').then((c) => c.LoginPageComponent),
  },
  {
    title: '6 Cities - Favorites',
    path: AppRoute.Favorites,
    canLoad: [isAuthorizedGuardFn],
    canActivate: [isAuthorizedGuardFn],
    loadComponent: () => import('./features/favorites/pages/favorites-page/favorites-page.component').then((c) => c.FavoritesPageComponent),
  },
  {
    title: '6 Cities - Place',
    path: AppRoute.Place,
    loadComponent: () => import('./features/place/pages/place-page/place-page.component').then((c) => c.PlacePageComponent),
  },
  {
    title: '6 Cities - Not Found',
    path: AppRoute.NotFound,
    loadComponent: () => import('./features/main/pages/not-found-page/not-found-page.component').then((c) => c.NotFoundPageComponent),
  },
];
