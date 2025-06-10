import { Component, inject, signal, OnInit, OnDestroy, computed } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { getPlaces } from 'src/app/mocks/places';
import { filter, Subscription } from 'rxjs';
import { AppRoute } from '@app/const';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  host: {
    '[class]': 'pageClassName()',
  }
})
export class LayoutComponent implements OnInit, OnDestroy {

  public newPageClassName = signal<string>('');
  public readonly pageClassName = computed<string>(() => `page ${this.newPageClassName()}`);
  public isLogoActive = true;
  public shouldUserInfoRender = true;
  public readonly favorites = getPlaces().slice(0, 1); //!!! store service

  private readonly router = inject(Router);
  private urlChangeSubscription?: Subscription;

  // Subscribing to router events to update the page class name
  // because <router-outlet /> is a child of <app-layout />
  ngOnInit() {
    this.urlChangeSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      const indexOfQuery = event.url.indexOf('?');
      const url = event.url.slice(1, indexOfQuery === -1 ? undefined : indexOfQuery);

      switch (url) {
        case AppRoute.Main:
          this.newPageClassName.set('page--gray page--main');
          break;

        case AppRoute.Login:
          this.newPageClassName.set('page--gray page--login');
          break;

        case AppRoute.NotFound:
          this.newPageClassName.set('page__main page__main--index page__main--index-empty not-found');
          break;

        case AppRoute.Favorites:
          if (this.favorites.length === 0) {
            this.newPageClassName.set('page--favorites-empty');
          }
          break;

        default: break;
      }
    });
  }

  ngOnDestroy() {
    this.urlChangeSubscription?.unsubscribe();
  }
}
