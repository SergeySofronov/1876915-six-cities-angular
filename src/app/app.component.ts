import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutComponent } from '@core/layout';
import { userActions } from '@core/auth/store';

import './polyfills';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(userActions.checkAuth());
  }
}
