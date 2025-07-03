import { Component, input } from '@angular/core';

@Component({
  selector: 'app-premium-label',
  imports: [],
  templateUrl: './premium-label.component.html',
  styleUrl: './premium-label.component.css'
})
export class PremiumLabelComponent {
  public className = input<string>('');
  public labelText = input<string>('Premium');
}
