import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiRoute } from '@app/const';
import { Place } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private readonly http = inject(HttpClient);

  public getPlace(id: string) {
    return this.http.get<Place>(`${ApiRoute.Previews}/${id}`);
  }
}
