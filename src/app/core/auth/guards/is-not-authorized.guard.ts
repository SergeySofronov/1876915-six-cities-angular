import { map, tap } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppRoute } from '@app/const';
import { UserService } from '../services';

export const isNotAuthorizedGuardFn: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.isAuthorized$.pipe(
    tap((isAuthorized) => {
      if (isAuthorized) {
        router.navigate([AppRoute.Main]);
      }
    }),
    map((isAuthorized) => !isAuthorized),
  );
};
