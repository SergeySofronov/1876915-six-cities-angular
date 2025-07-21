import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPlacePreviews } from 'src/app/mocks/previews';
import { MapComponent } from '@shared/components';
import { PlaceListComponent } from '../place-list/place-list.component';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { previewsActions, selectPreviews } from '@features/main/store';

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
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly store = inject(Store);

  public previews = toSignal(this.store.select(selectPreviews), { initialValue: getPlacePreviews() });
  public cityName = signal<string>('');

  public filteredPreviews = computed(() => this.previews().filter((item) => item.city.name === this.cityName()));
  public shouldPreviewRender = computed(() => this.filteredPreviews().length > 0);
  public markers = computed(() => this.filteredPreviews().map((item) => ({ id: item.id, ...item.location })));

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.cityName.set(params['city'] || '');
    });

    if (this.previews().length === 0) {
      this.store.dispatch(previewsActions.loadPreviews());
    }
  }
}
