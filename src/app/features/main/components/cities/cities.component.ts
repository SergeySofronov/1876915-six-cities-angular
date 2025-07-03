import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPlacePreviews } from 'src/app/mocks/previews';
import { MapComponent } from '@shared/components';
import { CitiesDefaults, DEFAULT_CITY } from '@app/const';
import { PlacePreview } from '@core/models';
import { PlaceListComponent } from '../place-list/place-list.component';

@Component({
  selector: 'app-cities',
  imports: [MapComponent, PlaceListComponent],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
  host: {
    class: 'cities',
  }
})
export class CitiesComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  public previews = signal<PlacePreview[]>(getPlacePreviews());//!!! replace to place store state
  public cityName = signal<string>('');

  public filteredPreviews = computed(() => this.previews().filter((item) => item.city.name === this.cityName()));
  public isPreviewsEmpty = computed(() => !this.filteredPreviews().length);
  public markers = computed(() => this.filteredPreviews().map((item) => ({ id: item.id, ...item.location })));
  public center = computed(() => this.getCityLocation(this.cityName(), this.previews()));

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.cityName.set(params['city'] || '');
    });
  }

  getCityLocation = (cityName: string, previews: PlacePreview[]) => {
    const existPreview = previews.find((item) => item.city.name === cityName);

    if (existPreview) {
      return existPreview.city.location;
    }

    return CitiesDefaults.find((item) => item.name === cityName) || DEFAULT_CITY;
  };
}
