import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { HistoryService } from '@shared/services';
import { AppRoute } from '@app/const';
import { map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsUserLoggedIn } from 'src/app/core/auth/store/user/user.selectors';

export const isNotAuthorizedGuardFn: CanActivateFn = (_: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const store = inject(Store);
  const user$ = store.select(selectIsUserLoggedIn);
  const historyService = inject(HistoryService);
  const isLoginUrl = state.url.includes(AppRoute.Login);

  return user$.pipe(
    tap((isAuthorized) => {
      if (isAuthorized && isLoginUrl) {
        historyService.back();
      }
    }),
    map((isAuthorized) => !isAuthorized),
  );
}
