

import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppRoute } from '@app/const';
import { selectIsUserLoggedIn } from 'src/app/core/auth/store/user/user.selectors';

export const isAuthorizedGuardFn: CanActivateFn = () => {
  const store = inject(Store);
  const user$ = store.select(selectIsUserLoggedIn);
  const router = inject(Router);

  return user$.pipe(
    tap((isAuthorized) => {
      if (!isAuthorized) {
        router.navigate([AppRoute.Login]);
      }
    })
  );
};
