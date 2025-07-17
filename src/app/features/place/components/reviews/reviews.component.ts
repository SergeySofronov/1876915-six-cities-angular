import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MAX_SHOWN_COMMENTS } from '@app/const';
import { PlaceComment } from '@core/models';
import { RatingStarsComponent } from '@shared/components';
import { CommentDatePipe } from '@shared/pipes';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectIsUserLoggedIn } from '@core/auth/selectors';

@Component({
  selector: 'app-reviews',
  imports: [CommentDatePipe, RatingStarsComponent, ReviewFormComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent {

  private readonly store = inject(Store);
  public isUserLoggedIn = toSignal(this.store.select(selectIsUserLoggedIn), { initialValue: false });

  public reviews = input.required<PlaceComment[]>();
  public placeId = input.required<string>();

  public sortedReviews = computed(() => this.reviews().toSorted((first, second) => new Date(first.date).getDate() - new Date(second.date).getDate()).slice(0, MAX_SHOWN_COMMENTS));
}
