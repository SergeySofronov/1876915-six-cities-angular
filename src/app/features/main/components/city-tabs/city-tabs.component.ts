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
  public cityNames = CITY_NAMES;
  public activeCityName = this.cityNames[0];
  public routerLink = AppRoute.Main;
  public queryParams: Params = { city: this.activeCityName };
  public routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'ignored'
  }

  private queryParamsSubscription?: Subscription;
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private updateQueryParams = (cityName: CityName) => {
    if (cityName === this.activeCityName) {
      return;
    }

    cityName = cityName || this.activeCityName;
    this.activeCityName = cityName;
    this.router.navigate([], { queryParams: { city: cityName }, queryParamsHandling: 'merge' });
  }

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