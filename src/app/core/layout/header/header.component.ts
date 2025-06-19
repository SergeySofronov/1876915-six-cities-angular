import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '@app/const';
import { LoggedUser } from 'src/app/core/models';
import { UserService } from '../../auth/services/user/user.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink],
})
export class HeaderComponent {
  public readonly logoLink = AppRoute.Main;
  public readonly logoutLink = AppRoute.Login;
  public readonly favoriteLink = AppRoute.Favorites;
  public user!: LoggedUser | null;

  public readonly isLogoActive = input.required<boolean>();
  public readonly shouldUserInfoRender = input.required<boolean>();
  public readonly favorites = input.required<unknown[]>();

  private readonly userService = inject(UserService);

  constructor() {
    this.user = this.userService.getUserData(); //!!! заменить на подписку на изменения через RxJS или store selector
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
