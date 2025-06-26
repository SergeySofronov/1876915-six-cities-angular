import { Component, input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '@app/const';

@Component({
  selector: 'app-layout-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public logoLink = AppRoute.Main;
  public className = input<string>('');
}
