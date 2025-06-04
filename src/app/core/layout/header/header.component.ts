import { Component, Input } from '@angular/core';
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
  logoLink!: string;
  logoutLink!: string;
  favoriteLink!: string;
  user!: LoggedUser | null;

  @Input({required: true}) isLogoActive!: boolean;
  @Input({required: true}) shouldUserInfoRender!: boolean;
  @Input({required: true}) favorites!: PlacePreview[];

  constructor() {
    this.logoLink = AppRoute.Main;
    this.logoutLink = AppRoute.Login;
    this.favoriteLink = AppRoute.Favorites;

    //!!! заменить на сервис
    this.user = getAuthorizationStatus() === AuthorizationStatus.Auth ? getUserData() : null;
  }

  logoClickHandler = (event: Event) => {
    if (this.isLogoActive) {
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
