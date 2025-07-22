import { Store } from '@ngrx/store';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AppRoute, ImageDefault } from '@app/const';
import { PlaceCardComponent } from '@shared/components';
import { selectFavorites } from '@features/favorites/selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { getFavoritePlacePreviews } from 'src/app/mocks/previews';

@Component({
  selector: 'app-favorites-page',
  imports: [NgTemplateOutlet, RouterLink, PlaceCardComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent {
  private readonly store = inject(Store);

  public imageSettings = {width: ImageDefault.SmallWidth, height: ImageDefault.SmallHeight};
  public routerLink = AppRoute.Main;
  public favorites = toSignal(this.store.select(selectFavorites), { initialValue: getFavoritePlacePreviews() });
  public grouped = Object.entries(Object.groupBy(this.favorites(), (preview) => preview.city.name));

}
