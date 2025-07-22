import { ChangeDetectionStrategy, Component, inject, input, SecurityContext } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { RATING_GRADES, USER_COMMENT_MIN_LENGTH, USER_COMMENT_MAX_LENGTH, MIN_PLACE_RATING, MAX_PLACE_RATING } from '@app/const';
import { commentActions, selectCommentsLoading } from '@features/place/store';
import { Store } from '@ngrx/store';

//Disclaimer: Reactive form in opposite to template-driven form in login-page.ts

@Component({
  selector: 'app-review-form',
  imports: [ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewFormComponent {
  public readonly ratingGrades = RATING_GRADES;
  public readonly ratingValues = RATING_GRADES.map((_, index) => RATING_GRADES.length - index);
  public readonly minTextLength = USER_COMMENT_MIN_LENGTH;

  public placeId = input.required<string>();

  private readonly sanitizer = inject(DomSanitizer);
  private readonly store = inject(Store);

  public isSubmitting = toSignal(this.store.select(selectCommentsLoading), { initialValue: false });

  public reviewForm = new FormGroup({
    rating: new FormControl(0, [Validators.required, Validators.min(MIN_PLACE_RATING), Validators.max(MAX_PLACE_RATING)]),
    review: new FormControl('', [Validators.required, Validators.minLength(USER_COMMENT_MIN_LENGTH), Validators.maxLength(USER_COMMENT_MAX_LENGTH)]),
  });

  public onSubmit(): void {
    const review = this.sanitizer.sanitize(SecurityContext.HTML, this.reviewForm.value.review || '');
    const rating = Number(this.reviewForm.value.rating);

    if (this.reviewForm.invalid || !review || !rating) {
      return;
    }

    this.store.dispatch(commentActions.addComment({ comment: { comment: review, rating, id: this.placeId() } }));
    this.reviewForm.reset();
  }
}
