import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { getPlaces } from './mocks/places';
import './polyfills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageClassName = 'page--gray page--main';
  isLogoActive = false;
  shouldUserInfoRender = true;
  favorites = getPlaces().slice(0, 1);
}
