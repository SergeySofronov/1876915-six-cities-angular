import { Component, inject, signal, OnInit, OnDestroy, computed } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { getPlaces } from 'src/app/mocks/places';
import { Subscription } from 'rxjs';
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

  public newPageClassName = signal('');
  public pageClassName = computed(() => `page ${this.newPageClassName()}`);
  public isLogoActive = true;
  public shouldUserInfoRender = true;
  public favorites = getPlaces().slice(0, 1); //!!! store service

  private router = inject(Router);
  private queryParamsSubscription?: Subscription;

  ngOnInit() {
    this.queryParamsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url.slice(1)) {
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
      }
    })
  }

  ngOnDestroy() {
    this.queryParamsSubscription?.unsubscribe();
  }
}
