import { Component, input } from '@angular/core';
import { PlaceComment } from '@core/models';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  public reviews = input<PlaceComment[]>([]);
  public placeId = input<string>('');
}
