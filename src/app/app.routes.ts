import { Routes } from '@angular/router';
import { AppRoute } from './app.const';

export const routes: Routes = [
  {
    title: '6 Cities',
    path: AppRoute.Main,
    loadComponent: () => import('./pages/main-page/main-page.component').then((c) => c.MainPageComponent),
  },
  {
    title: '6 Cities - Login',
    path: AppRoute.Login,
    loadComponent: () => import('./pages/login-page/login-page.component').then((c) => c.LoginPageComponent),
  },
  {
    title: '6 Cities - Favorites',
    path: AppRoute.Favorites,
    loadComponent: () => import('./pages/favorites-page/favorites-page.component').then((c) => c.FavoritesPageComponent),
  },
  {
    title: '6 Cities - Place',
    path: AppRoute.Place,
    loadComponent: () => import('./pages/place-page/place-page.component').then((c) => c.PlacePageComponent),
  },
  {
    title: '6 Cities - Not Found',
    path: AppRoute.NotFound,
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then((c) => c.NotFoundPageComponent),
  },
];
