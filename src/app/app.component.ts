import { Component } from '@angular/core';
import { LayoutComponent } from '@core/layout';

import './polyfills';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
