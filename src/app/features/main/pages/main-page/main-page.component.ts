import { Component } from '@angular/core';
import { CityTabsComponent } from "../../components/city-tabs/city-tabs.component";
import { CitiesComponent } from "../../components/cities/cities.component";

@Component({
  selector: 'app-main-page',
  imports: [CityTabsComponent, CitiesComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {}
