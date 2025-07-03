import { Component, inject, input } from '@angular/core';
import { AppRoute, ImageDefault } from '@app/const';
import { Router } from '@angular/router';

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

  public handleClick = () => {
    this.router.navigate([AppRoute.Login]);
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
