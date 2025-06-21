import { Component, inject, input, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '@app/const';
import { LoggedUser } from 'src/app/core/models';
import { UserService } from '../../auth/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink],
})
export class HeaderComponent implements OnDestroy {
  public readonly logoLink = AppRoute.Main;
  public readonly logoutLink = AppRoute.Login;
  public readonly favoriteLink = AppRoute.Favorites;
  public user!: LoggedUser | null;

  public readonly isLogoActive = input.required<boolean>();
  public readonly shouldUserInfoRender = input.required<boolean>();
  public readonly favorites = input.required<unknown[]>();

  private readonly userService = inject(UserService);
  private readonly subscription!: Subscription;

  constructor() {
    this.subscription = this.userService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
