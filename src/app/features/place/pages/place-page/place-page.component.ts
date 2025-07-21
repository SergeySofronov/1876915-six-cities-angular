import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal, OnDestroy } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DEFAULT_CITY, ImageDefault } from '@app/const';
import { MarkerType } from '@core/models';
import { getComments } from 'src/app/mocks/comments';
import { getPlaceById } from 'src/app/mocks/places';
import { getNearbyPlacePreviews } from 'src/app/mocks/previews';
import { HistoryService } from '@shared/services';
import { CapitalizeFirstLetterPipe, PluralizePipe } from '@shared/pipes';
import { AddFavoriteButtonComponent, MapComponent, PlaceCardComponent, PremiumLabelComponent, RatingStarsComponent, SpinnerComponent } from '@shared/components';
import { ReviewsComponent } from '../../components';
import { toSignal } from '@angular/core/rxjs-interop';
import { commentActions, nearbyActions, placeActions, selectComments, selectCommentsLoading, selectNearbyLoading, selectNearbyPlaces, selectPlaceById, selectPlaceError, selectPlaceLoading } from '@features/place/store';
import { Subscription } from 'rxjs';
import { markerActions } from '@core/auth/store';

@Component({
  selector: 'app-place-page',
  imports: [
    CapitalizeFirstLetterPipe,
    PluralizePipe,
    NgTemplateOutlet,
    SpinnerComponent,
    MapComponent,
    PremiumLabelComponent,
    AddFavoriteButtonComponent,
    ReviewsComponent,
    RatingStarsComponent,
    PlaceCardComponent
  ],
  templateUrl: './place-page.component.html',
  styleUrl: './place-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacePageComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly subscription = new Subscription();

  public imageSettings = { width: ImageDefault.OfferBookmarkIconWidth, height: ImageDefault.OfferBookmarkIconHeight };

  public placeId = signal('');
  public place = toSignal(this.store.select(selectPlaceById(this.placeId)), { initialValue: getPlaceById(this.placeId()) });
  public nearbyPreviews = toSignal(this.store.select(selectNearbyPlaces), { initialValue: getNearbyPlacePreviews(this.placeId()) });
  public comments = toSignal(this.store.select(selectComments), { initialValue: getComments() });

  public commentsLoading = toSignal(this.store.select(selectCommentsLoading), { initialValue: true });
  public nearbyLoading = toSignal(this.store.select(selectNearbyLoading), { initialValue: true });
  public placeLoading = toSignal(this.store.select(selectPlaceLoading), { initialValue: true });

  private error = toSignal(this.store.select(selectPlaceError), { initialValue: null });

  public center = computed(() => {
    const place = this.place();
    if (!place) {
      return DEFAULT_CITY;
    }

    return { id: place.id, ...place.location, zoom: place.city.location.zoom };
  });

  public markers = computed(() => this.nearbyPreviews().map((item) => ({ id: item.id, ...item.location }) as MarkerType).concat(this.center()));

  public shouldPlaceShown = computed(() => !!(this.place()?.id === this.placeId()) && (!this.placeLoading()) && (!this.error()));
  public shouldNearbyShown = computed(() => !!(this.shouldPlaceShown() && (this.nearbyPreviews().length > 0) && (!this.nearbyLoading())));
  public shouldCommentsShown = computed(() => !!(this.shouldPlaceShown() && (this.comments().length > 0) && (!this.commentsLoading())));

  private readonly route = inject(ActivatedRoute);
  private readonly historyService = inject(HistoryService);

  constructor() {
    effect(() => {
      if (this.shouldPlaceShown()) {
        this.store.dispatch(markerActions.setActiveMarker({ marker: this.center() }));
      }

      if (this.error() || !this.placeId()) {
        this.historyService.back();
      }
    });
  }

  ngOnInit(): void {

    this.subscription.add(this.route.params.subscribe((params) => {
      const id = params['id'];

      if ((this.placeId() === id) || (this.place()?.id === id)) {
        return;
      }

      this.placeId.set(id);
      this.store.dispatch(placeActions.loadPlace({ id }));
      this.store.dispatch(nearbyActions.loadNearby({ id }));
      this.store.dispatch(commentActions.loadComments({ id }));
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
