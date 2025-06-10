import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '@app/const';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {
  public readonly goBackLink = AppRoute.Main;
}
