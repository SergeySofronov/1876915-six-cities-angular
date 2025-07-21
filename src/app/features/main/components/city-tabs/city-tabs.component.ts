import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, Params, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { distinctUntilChanged, map, Subscription, tap } from 'rxjs';
import { AppRoute, CitiesDefaults, CITY_NAMES, DEFAULT_CITY } from '@app/const';
import { CityName, PlacePreview } from 'src/app/core/models';
import { Store } from '@ngrx/store';
import { markerActions } from '@core/auth/store';
import { selectPreviews } from '@features/main/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { getPlacePreviews } from 'src/app/mocks/previews';

@Component({
  selector: 'app-city-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './city-tabs.component.html',
  styleUrl: './city-tabs.component.css',
  host: {
    class: 'tabs'
  }
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

  private readonly queryParamsSubscription = new Subscription();
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(Store);
  private readonly previews = toSignal(this.store.select(selectPreviews), { initialValue: getPlacePreviews() });

  private updateQueryParams = (cityName: CityName) => {
    if (cityName === this.activeCityName) {
      return;
    }

    cityName = cityName || this.activeCityName;
    this.activeCityName = cityName;
    this.router.navigate([], { queryParams: { city: cityName }, queryParamsHandling: 'merge', replaceUrl: true });

    this.store.dispatch(markerActions.setActiveMarker({ marker: this.getCityLocation(cityName, this.previews()) }));
  }

  // Subscribing to query params to update the active city name
  // because there are some links that may change the query params
  ngOnInit() {
    this.queryParamsSubscription.add(this.route.queryParams.pipe(
      distinctUntilChanged(),
      map((params) => params['city']),
      tap((city) => this.updateQueryParams(city))
    ).subscribe());
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }

  tabClickHandler({ currentTarget }: Event) {
    const tabName = (currentTarget as HTMLLIElement).dataset['tabName'] as CityName;
    this.updateQueryParams(tabName);
  };


  getCityLocation = (cityName: string, previews: PlacePreview[]) => {
    const existPreview = previews.find((item) => item.city.name === cityName);

    if (existPreview) {
      return existPreview.city.location;
    }

    return CitiesDefaults.find((item) => item.name === cityName) || DEFAULT_CITY;
  };
}
