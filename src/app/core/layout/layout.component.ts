import { Component, inject, signal, OnInit, OnDestroy, computed } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppRoute } from '@app/const';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectFavorites } from '@features/favorites/selectors';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  host: {
    '[class]': 'className()',
  }
})
export class LayoutComponent implements OnInit, OnDestroy {

  public pageClassName = signal<string>('');
  public readonly className = computed<string>(() => `page ${this.pageClassName()}`);
  public isLogoActive = false;
  public shouldUserInfoRender = true;
  public shouldFooterRender = false;

  private readonly store = inject(Store);
  public readonly favorites = toSignal(this.store.select(selectFavorites), { initialValue: [] });

  private readonly router = inject(Router);
  private urlChangeSubscription?: Subscription;

  // Subscribing to router events to update the page class name
  // because <router-outlet /> is a child of <app-layout />
  ngOnInit() {
    this.urlChangeSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd | RoutesRecognized) => {

      const indexOfQuery = event.url.indexOf('?');
      const url = event.url.slice(1, indexOfQuery === -1 ? undefined : indexOfQuery);
      const indexOfSlash = url.indexOf('/');
      const urlWithoutSlash = url.slice(0, indexOfSlash);

      this.isLogoActive = false;
      this.shouldUserInfoRender = true;
      this.shouldFooterRender = false;

      switch (urlWithoutSlash) {
        case AppRoute.Main:
          this.isLogoActive = true;
          this.pageClassName.set('page--gray page--main');
          break;

        case AppRoute.Login:
          this.shouldUserInfoRender = false;
          this.pageClassName.set('page--gray page--login');
          break;

        case AppRoute.Favorites:
          this.shouldFooterRender = true;
          if (this.favorites.length === 0) {
            this.pageClassName.set('page--favorites-empty');
          }
          break;

        case AppRoute.PlaceWithoutId:
          break;

        default:
          this.pageClassName.set('page--gray');
          break;
      }
    });
  }

  ngOnDestroy() {
    this.urlChangeSubscription?.unsubscribe();
  }
}
