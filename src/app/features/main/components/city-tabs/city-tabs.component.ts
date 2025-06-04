import { Component } from '@angular/core';
import { CITY_NAMES } from '@app/const';

@Component({
  selector: 'app-city-tabs',
  imports: [],
  templateUrl: './city-tabs.component.html',
  styleUrl: './city-tabs.component.css'
})
export class CityTabsComponent {
  cityNames = CITY_NAMES;
  activeCityName = this.cityNames[0];

  tabClickHandler = (event: Event) => {
    event.preventDefault();
  }

  anchorClickHandler = (event: Event) => {
    event.preventDefault();
  }
}

