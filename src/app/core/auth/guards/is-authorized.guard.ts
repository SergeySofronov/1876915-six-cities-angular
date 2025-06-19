import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { NavigationService } from '@shared';
import { AppRoute } from '@app/const';
import { map } from 'rxjs';

export const isAuthorizedGuardFn: CanActivateFn = (_: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const navigationService = inject(NavigationService);
  const isLoginUrl = state.url.includes(AppRoute.Login);

  return userService.isAuthorized$.pipe(
    map((isAuthorized) => {
      if (isAuthorized && isLoginUrl) {
        navigationService.back();
        return false;
      }

      if (!isAuthorized && !isLoginUrl) {
        router.navigate([AppRoute.Login]);
        return false;
      }

      return true;
    }),
  );
}
