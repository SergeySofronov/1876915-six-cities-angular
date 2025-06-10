import { inject, Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { AppRoute } from '@app/const';

// Class style guard with injectable entities (not used in the project)
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  canActivate(): boolean {
    console.log("🚀 ~ AuthGuard ~ canActivate ~ this.userService.isAuthorized:", this.userService.isAuthorized)
    if (this.userService.isAuthorized) {
      return true;
    } else {
      this.router.navigate([AppRoute.Login]);
      return false;
    }
  }
}

// Function style guard with injectable entities
export const isAuthorizedGuardFn: CanActivateFn = () => {
  const isAuthorized = inject(UserService).isAuthorized;
  if (isAuthorized) {
    return true;
  } else {
    inject(Router).navigate([AppRoute.Login]);
    return false;
  }
}
