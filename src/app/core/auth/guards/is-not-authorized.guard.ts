import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { UserService } from '@core/auth/services';
import { HistoryService } from '@shared/services';
import { AppRoute } from '@app/const';
import { map, tap } from 'rxjs';

export const isNotAuthorizedGuardFn: CanActivateFn = (_: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService = inject(UserService);
  const historyService = inject(HistoryService);
  const isLoginUrl = state.url.includes(AppRoute.Login);

  return userService.isAuthorized$.pipe(
    tap((isAuthorized) => {
      if (isAuthorized && isLoginUrl) {
        historyService.back();
      }
    }),
    map((isAuthorized) => !isAuthorized),
  );
}