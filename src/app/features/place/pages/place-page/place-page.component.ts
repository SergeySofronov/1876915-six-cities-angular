import { Component, computed, inject, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DEFAULT_CITY, ImageDefault, MAX_SHOWN_NEAR_PLACES } from '@app/const';
import { MarkerType, Place, PlaceComment, PlacePreview } from '@core/models';
import { getComments } from 'src/app/mocks/comments';
import { getPlaceById } from 'src/app/mocks/places';
import { getNearbyPlacePreviews } from 'src/app/mocks/previews';
import { HistoryService } from '@shared/services';
import { CapitalizeFirstLetterPipe, PluralizePipe } from '@shared/pipes';
import { AddFavoriteButtonComponent, MapComponent, PlaceCardComponent, PremiumLabelComponent, RatingStarsComponent, SpinnerComponent } from '@shared/components';
import { ReviewsComponent } from '../../components';

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
  styleUrl: './place-page.component.css'
})
export class PlacePageComponent implements OnInit {
  public placeId = '';
  public place: Place | null = null; // !!! store + service
  public nearbyPreviews: PlacePreview[] = []; // !!! store + service
  public comments: PlaceComment[] = []; // !!! store + service
  public imageSettings = { width: ImageDefault.OfferBookmarkIconWidth, height: ImageDefault.OfferBookmarkIconHeight };

  public center = computed(() => this.place ? ({ id: this.place.id, ...this.place.location, zoom: this.place.city.location.zoom }) : DEFAULT_CITY);
  public markers = computed(() => this.nearbyPreviews.map((item) => ({ id: item.id, ...item.location }) as MarkerType).concat(this.center()));

  public shouldPlaceShown = computed(() => !!(this.place && (this.place?.id === this.placeId)));
  public shouldNearbyShown = computed(() => !!(this.shouldPlaceShown() && (this.nearbyPreviews.length > 0) /*&& (nearbyStatus === RequestStatus.Fulfilled)*/)); //!!! store
  public shouldCommentsShown = computed(() => !!(this.shouldPlaceShown() && (this.comments.length > 0) /*&& (commentsStatus === RequestStatus.Fulfilled)*/)); //!!! store

  private readonly route = inject(ActivatedRoute);
  private readonly historyService = inject(HistoryService);

  ngOnInit(): void {
    this.placeId = this.route.snapshot.params['id'];
    this.place = getPlaceById(this.placeId);
    this.nearbyPreviews = getNearbyPlacePreviews(this.placeId).slice(0, MAX_SHOWN_NEAR_PLACES);
    this.comments = getComments();

    if (!this.shouldPlaceShown()) {
      this.historyService.back(); //если нет данных, то возвращаемся на предыдущую страницу или на главную
    }
  }
}
