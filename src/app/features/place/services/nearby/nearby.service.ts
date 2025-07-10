import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiRoute } from '@app/const';
import { PlacePreview } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class NearbyService {
  private readonly http = inject(HttpClient);

  public getNearby(id: string) {
    return this.http.get<PlacePreview[]>(`${ApiRoute.Nearby}/${id}`);
  }
}
