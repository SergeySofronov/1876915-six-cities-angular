import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppRoute } from '@app/const';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectLoggedUser } from 'src/app/core/auth/store/user/user.selectors';
import { userActions } from '@core/auth/store';
import { PlacePreview } from '@core/models';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly logoLink = AppRoute.Main;
  public readonly logoutLink = AppRoute.Login;
  public readonly favoriteLink = AppRoute.Favorites;

  public readonly isLogoActive = input.required<boolean>();
  public readonly shouldUserInfoRender = input.required<boolean>();
  public readonly favorites = input.required<PlacePreview[]>();

  private readonly store = inject(Store);
  private readonly router = inject(Router);

  readonly user = toSignal(this.store.select(selectLoggedUser), { initialValue: null });

  logoClickHandler = (event: Event) => {
    if (this.isLogoActive()) {
      event.preventDefault();
    }
  }

  logoutHandler = () => {
    this.store.dispatch(userActions.logout());
  }

  emailClickHandler = (evt: Event) => {
    if (AppRoute.Favorites === this.router.url.slice(1)) {
      evt.preventDefault();
    }
  }
}
