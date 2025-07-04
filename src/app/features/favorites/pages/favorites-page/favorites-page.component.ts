import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { AppRoute, ImageDefault } from '@app/const';
import { getFavoritePlaces } from 'src/app/mocks/places';
import { PlaceCardComponent } from '@shared/components';

@Component({
  selector: 'app-favorites-page',
  imports: [NgTemplateOutlet, RouterLink, PlaceCardComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent {
  public imageSettings = {width: ImageDefault.SmallWidth, height: ImageDefault.SmallHeight};
  public routerLink = AppRoute.Main;
  public favorites = getFavoritePlaces(); //!!! store
  public grouped = Object.entries(Object.groupBy(this.favorites, (preview) => preview.city.name));
}
