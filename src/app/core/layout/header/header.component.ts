import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute, AuthorizationStatus } from '@app/const';
import { LoggedUser, PlacePreview } from '@app/types';
import { getAuthorizationStatus } from 'src/app/mocks/utils';
import { getUserData } from '../../auth/services/token';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink],
})
export class HeaderComponent {
  public logoLink = AppRoute.Main;
  public logoutLink = AppRoute.Login;
  public favoriteLink = AppRoute.Favorites;
  public user!: LoggedUser | null;

  public isLogoActive = input.required<boolean>();
  public shouldUserInfoRender = input.required<boolean>();
  public favorites = input.required<PlacePreview[]>();

  constructor() {
    //!!! заменить на сервис
    this.user = getAuthorizationStatus() === AuthorizationStatus.Auth ? getUserData() : null;
  }

  logoClickHandler = (event: Event) => {
    if (this.isLogoActive()) {
      event.preventDefault();
    }
  }

  logoutHandler = () => {
    console.log('logoutHandler not implemented');
  }

  emailClickHandler = () => {
    console.log('emailClickHandler not implemented');
  }
}
