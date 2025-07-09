import { Component, computed, input } from '@angular/core';
import { MAX_SHOWN_COMMENTS } from '@app/const';
import { PlaceComment } from '@core/models';
import { RatingStarsComponent } from '@shared/components';
import { CommentDatePipe } from '@shared/pipes';
import { ReviewFormComponent } from '../review-form/review-form.component';

@Component({
  selector: 'app-reviews',
  imports: [CommentDatePipe, RatingStarsComponent, ReviewFormComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  public isAuthorized = true; //!!! store

  public reviews = input<PlaceComment[]>([]);
  public placeId = input<string>('');

  public sortedReviews = computed(() => this.reviews().toSorted((first, second) => new Date(first.date).getDate() - new Date(second.date).getDate()).slice(0, MAX_SHOWN_COMMENTS));
}
