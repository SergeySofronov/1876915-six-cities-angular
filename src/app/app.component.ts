import { Component, inject } from '@angular/core';
import { HistoryService } from '@shared/services';
import { EnvironmentService } from './core/services/environment/environment.service';
import { LayoutComponent } from '@core/layout';

import './polyfills';
// import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly navigationService = inject(HistoryService);
  private readonly environmentService = inject(EnvironmentService);


  constructor() {
    console.log("apiUrl", this.environmentService.getValue('apiUrl'));
  }
}
