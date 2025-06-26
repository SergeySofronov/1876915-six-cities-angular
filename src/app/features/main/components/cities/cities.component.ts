import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPlacePreviews } from 'src/app/mocks/previews';
import { MapComponent } from '@shared/components';
import { PlaceListComponent } from '@features/main/components';

@Component({
  selector: 'app-cities',
  imports: [MapComponent, PlaceListComponent],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  public previews = getPlacePreviews();//!!! replace to place store state
  public cityName = signal<string>('');

  public filteredPreviews = computed(() => this.previews.filter((item) => item.city.name === this.cityName()));
  public isPreviewsEmpty = computed(() => !this.filteredPreviews().length);
  public markers = computed(() => this.filteredPreviews().map((item) => ({ id: item.id, ...item.location })));

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.cityName.set(params['city'] || '');
    });
  }
}
