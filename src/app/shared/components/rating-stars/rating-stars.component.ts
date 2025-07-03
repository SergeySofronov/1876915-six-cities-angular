import { Component, computed, input } from '@angular/core';
import { MAX_PLACE_RATING } from '@app/const';

@Component({
  selector: 'app-rating-stars',
  imports: [],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css'
})
export class RatingStarsComponent {
  public rating = input<number>(0);
  public className = input<{ rating: string; stars: string, value?: string }>({ rating: '', stars: '', value: '' });
  public shouldRatingShown = input<boolean>(false);

  public percentValue = computed(() => `${Math.round(this.rating() / MAX_PLACE_RATING * 100)}%`);
}
