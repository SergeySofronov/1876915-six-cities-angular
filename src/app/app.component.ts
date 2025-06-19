import { Component, inject } from '@angular/core';
import { NavigationService } from '@shared';
import { EnvironmentService } from './core/services/environment/environment.service';
import { LayoutComponent } from './core/layout/layout.component';

import './polyfills';


@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly navigationService = inject(NavigationService);
  private readonly environmentService = inject(EnvironmentService);


  constructor() {
    console.log(this.environmentService.getValue('apiUrl'));
  }
}
