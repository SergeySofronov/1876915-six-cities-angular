import { Component } from '@angular/core';
import { GoBackDirective } from '@shared/directives';

@Component({
  selector: 'app-not-found-page',
  imports: [GoBackDirective],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {
}
