import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '@app/const';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from '../../auth/store/user.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink, AsyncPipe],
})
export class HeaderComponent {
  public readonly logoLink = AppRoute.Main;
  public readonly logoutLink = AppRoute.Login;
  public readonly favoriteLink = AppRoute.Favorites;

  public readonly isLogoActive = input.required<boolean>();
  public readonly shouldUserInfoRender = input.required<boolean>();
  public readonly favorites = input.required<unknown[]>();

  private readonly store = inject(Store);
  public user$ = this.store.select(selectLoggedUser);

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
