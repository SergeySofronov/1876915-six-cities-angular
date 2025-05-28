import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { getPlaces } from './mocks/places';
import './polyfills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageClassName = 'page--gray page--main';
  isLogoActive = true;
  shouldUserInfoRender = true;
  favorites = getPlaces().slice(0, 1);
}
