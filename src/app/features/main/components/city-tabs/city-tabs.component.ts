import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, Params, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRoute, CITY_NAMES } from '@app/const';
import { CityName } from '@app/types';

@Component({
  selector: 'app-city-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './city-tabs.component.html',
  styleUrl: './city-tabs.component.css'
})
export class CityTabsComponent implements OnInit, OnDestroy {
  public readonly cityNames = CITY_NAMES;
  public readonly routerLink = AppRoute.Main;
  public activeCityName = CITY_NAMES[0];
  public queryParams: Params = { city: this.activeCityName };
  public readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'ignored'
  }

  private queryParamsSubscription?: Subscription;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private updateQueryParams = (cityName: CityName) => {
    if (cityName === this.activeCityName) {
      return;
    }

    cityName = cityName || this.activeCityName;
    this.activeCityName = cityName;
    this.router.navigate([], { queryParams: { city: cityName }, queryParamsHandling: 'merge' });
  }

  // Subscribing to query params to update the active city name
  // because there are some links that may change the query params
  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      const city = params['city'];
      this.updateQueryParams(city);
    });
  }

  ngOnDestroy() {
    this.queryParamsSubscription?.unsubscribe();
  }

  tabClickHandler({ currentTarget }: Event) {
    const tabName = (currentTarget as HTMLLIElement).dataset['tabName'] as CityName;
    this.updateQueryParams(tabName);
  };
}