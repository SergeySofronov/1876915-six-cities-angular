import { Component, computed, input } from '@angular/core';
import { AppRoute, ImageDefault } from '@app/const';
import { MarkerType, PlacePreview } from '@core/models';
import { RouterLink } from '@angular/router';
import { CapitalizeFirstLetterPipe } from '@shared/pipes';
import { PremiumLabelComponent } from '../premium-label/premium-label.component';
import { AddFavoriteButtonComponent } from '../add-favorite-button/add-favorite-button.component';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';

@Component({
  selector: 'app-place-card',
  imports: [
    RouterLink,
    CapitalizeFirstLetterPipe,
    PremiumLabelComponent,
    AddFavoriteButtonComponent,
    RatingStarsComponent,
  ],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css'
})
export class PlaceCardComponent {
  public preview = input.required<PlacePreview>();
  public cardClassName = input<string>('');
  public imageClassName = input<string>('');
  public imageWidth = input<number>(ImageDefault.DefaultWidth);
  public imageHeight = input<number>(ImageDefault.DefaultHeight);
  public mouseEventHandler = input<((marker: MarkerType) => void) | null>(null);

  public routerLink = computed<string[]>(() => [AppRoute.PlaceWithoutId, this.preview().id]);
  public cardClass = computed(() => `place-card ${this.cardClassName()}`);
  public isPremium = computed(() => this.preview().isPremium);

  public handleMouseEnter = () => {
    this.mouseEventHandler()?.({ ...this.preview().location, id: this.preview().id });
  };

  public handleMouseLeave = () => {
    this.mouseEventHandler()?.({ ...this.preview().city.location });
  };
}
