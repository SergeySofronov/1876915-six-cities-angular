import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '@app/const';

@Component({
  selector: 'app-layout-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logoLink = AppRoute.Main;

  @Input() className?: boolean;
}
