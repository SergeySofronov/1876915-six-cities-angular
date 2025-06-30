
import { Injectable, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { AppRoute } from '@app/const';
import { Location } from '@angular/common';
import { filter, pairwise, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService implements OnDestroy {
  private subscription: Subscription;
  private previousUrl?: string;

  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {
    this.subscription = this.router.events
      .pipe(
        filter((event) => event instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: [RoutesRecognized, RoutesRecognized]) => {
        this.previousUrl = events[0].urlAfterRedirects;
      });
  }

  public back(): void {
    if (this.previousUrl !== undefined) {
      this.location.back();
    }

    this.router.navigate([AppRoute.Main], { replaceUrl: true });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}