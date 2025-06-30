import { Component, computed, input, signal } from '@angular/core';
import { SortType } from '@app/const';
import { PlacePreview, PlaceSortType } from '@core/models';
import { PluralizePipe } from 'src/app/shared/pipes/pluralize.pipe';

@Component({
  selector: 'app-place-list',
  imports: [PluralizePipe],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css'
})
export class PlaceListComponent {
  public previews = input.required<PlacePreview[]>();
  public cityName = input.required<string>();

  public activeSortType = signal<PlaceSortType>(SortType.Popular);

  public sortedPreviews = computed(() => this.sortPreview(this.previews(), this.activeSortType()));
  public previewQuantity = computed(() => this.sortedPreviews().length);

  private sortByPriceIncrease = (first: PlacePreview, second: PlacePreview) => second.price - first.price;
  private sortByPriceDecrease = (first: PlacePreview, second: PlacePreview) => first.price - second.price;
  private sortByRating = (first: PlacePreview, second: PlacePreview) => second.rating - first.rating;

  private sort: Record<string, (preview: PlacePreview[]) => PlacePreview[]> = {
    [SortType.Popular]: (preview) => preview,
    [SortType.HighToLow]: (preview) => preview.toSorted(this.sortByPriceIncrease),
    [SortType.LowToHigh]: (preview) => preview.toSorted(this.sortByPriceDecrease),
    [SortType.TopRated]: (preview) => preview.toSorted(this.sortByRating),
  };

  private sortPreview = (preview: PlacePreview[], sortType: PlaceSortType) => (this.sort[SortType[sortType]])(preview);
}
