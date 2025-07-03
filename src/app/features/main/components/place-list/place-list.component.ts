import { Component, computed, input, signal } from '@angular/core';
import { SortType } from '@app/const';
import { MarkerType, PlacePreview, PlaceSortType } from '@core/models';
import { PlaceCardComponent } from '@shared/components';
import { PluralizePipe } from '@shared/pipes';
import { PlaceSortComponent } from '../place-sort/place-sort.component';

const sortByPriceIncrease = (first: PlacePreview, second: PlacePreview) => second.price - first.price;
const sortByPriceDecrease = (first: PlacePreview, second: PlacePreview) => first.price - second.price;
const sortByRating = (first: PlacePreview, second: PlacePreview) => second.rating - first.rating;

const sort: Record<string, (preview: PlacePreview[]) => PlacePreview[]> = {
  [SortType.Popular]: (preview) => preview,
  [SortType.HighToLow]: (preview) => preview.toSorted(sortByPriceIncrease),
  [SortType.LowToHigh]: (preview) => preview.toSorted(sortByPriceDecrease),
  [SortType.TopRated]: (preview) => preview.toSorted(sortByRating),
};

const sortPreview = (preview: PlacePreview[], sortType: PlaceSortType) => (sort[SortType[sortType]])(preview);


@Component({
  selector: 'app-place-list',
  imports: [PluralizePipe, PlaceCardComponent, PlaceSortComponent],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css'
})
export class PlaceListComponent {
  public previews = input.required<PlacePreview[]>();
  public cityName = input.required<string>();

  public activeSortType = signal<PlaceSortType>(SortType.Popular);

  public sortedPreviews = computed(() => sortPreview(this.previews(), this.activeSortType()));
  public previewQuantity = computed(() => this.sortedPreviews().length);

  public handleMouseEvent = (marker: MarkerType) => {
    console.log(marker);
  };
}

