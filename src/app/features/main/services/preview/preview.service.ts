import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlacePreview } from '@core/models';
import { ApiRoute } from '@app/const';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  private readonly http = inject(HttpClient);

  public getPreviews() {
    return this.http.get<PlacePreview[]>(ApiRoute.Previews);
  }
}
