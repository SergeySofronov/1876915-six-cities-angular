import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeFavoritesResponse, PlacePreview } from '@core/models';
import { ApiRoute } from '@app/const';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly http = inject(HttpClient);

  getFavorites(): Observable<PlacePreview[]> {
    return this.http.get<PlacePreview[]>(ApiRoute.Favorites);
  }

  changeFavoriteStatus(placeId: string, status: boolean): Observable<ChangeFavoritesResponse> {
    return this.http.post<ChangeFavoritesResponse>(
      `${ApiRoute.Favorites}/${placeId}/${Number(status)}`,
      {}
    );
  }
}
