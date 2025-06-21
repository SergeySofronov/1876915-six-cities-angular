import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { UserService } from '@core/auth/services';
import { NavigationService } from '@shared/services';
import { AppRoute } from '@app/const';
import { tap } from 'rxjs';

export const isAuthorizedGuardFn: CanActivateFn = (_: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService = inject(UserService);
  const navigationService = inject(NavigationService);
  const isLoginUrl = state.url.includes(AppRoute.Login);

  return userService.isAuthorized$.pipe(
    tap((isAuthorized) => {
      if (isAuthorized && isLoginUrl) {
        navigationService.back();
      }
    })
  );
}
