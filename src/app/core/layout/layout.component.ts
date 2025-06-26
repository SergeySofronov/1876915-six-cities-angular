import { Component, inject, signal, OnInit, OnDestroy, computed } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppRoute } from '@app/const';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { getPlacePreviews } from 'src/app/mocks/previews';

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
  public isLogoActive = false;
  public shouldUserInfoRender = true;
  public shouldFooterRender = false;
  public readonly favorites = getPlacePreviews().slice(0, 1); //!!! store service

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

      this.isLogoActive = false;
      this.shouldUserInfoRender = true;
      this.shouldFooterRender = false;

      switch (url) {
        case AppRoute.Main:
          this.isLogoActive = true;
          this.newPageClassName.set('page--gray page--main');
          break;

        case AppRoute.Login:
          this.shouldUserInfoRender = false;
          this.newPageClassName.set('page--gray page--login');
          break;

        case AppRoute.NotFound:
          this.shouldUserInfoRender = false;
          this.newPageClassName.set('page__main page__main--index page__main--index-empty not-found');
          break;

        case AppRoute.Favorites:
          this.shouldFooterRender = true;
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


/*
page page--favorites-empty
page
page page--gray page--login
page page--gray page--main
page page--gray page--main
page
page






*/
