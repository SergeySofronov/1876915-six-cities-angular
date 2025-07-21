import { Component, inject, input } from '@angular/core';
import { AppRoute, ImageDefault } from '@app/const';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectIsFavorite } from '@features/favorites/selectors';
import { selectIsUserLoggedIn } from '@core/auth/selectors';
import { favoritesActions } from '@features/favorites/store';

@Component({
  selector: 'app-add-favorite-button',
  imports: [],
  templateUrl: './add-favorite-button.component.html',
  styleUrl: './add-favorite-button.component.css'
})
export class AddFavoriteButtonComponent {
  public placeId = input<string>('');
  public className = input<string>('');
  public width = input<number>(ImageDefault.CardBookmarkIconWidth);
  public height = input<number>(ImageDefault.CardBookmarkIconHeight);

  private readonly router = inject(Router);
  private readonly store = inject(Store);

  public readonly isFavorite = toSignal(this.store.select(selectIsFavorite(this.placeId)), { initialValue: false });
  public readonly isUserLoggedIn = toSignal(this.store.select(selectIsUserLoggedIn), { initialValue: false });

  public handleClick = () => {
    if (!this.isUserLoggedIn()) {
      this.router.navigate([AppRoute.Login]);
    }

    this.store.dispatch(favoritesActions.changeFavoriteStatus({ status: !this.isFavorite(), placeId: this.placeId() }));
  }

  //!!! store
  // const navigate = useNavigate();

  // const authStatus = useAuthStatusSelector();
  // const status = useFavoritesChangeStatusSelector(placeId);
  // const isFavorite = useIsFavoriteSelector(placeId);

  // const { changeFavoriteStatusAction } = useActionCreators(favoriteActions);
  // const isButtonDisabled = (status === RequestStatus.Pending);

  // const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
  //   if (authStatus !== AuthorizationStatus.Auth) {
  //     navigate(AppRoute.Login);
  //     return;
  //   }

  //   changeFavoriteStatusAction({ status: !isFavorite, placeId });
  // };
}
