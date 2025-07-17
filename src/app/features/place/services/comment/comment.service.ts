import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiRoute } from '@app/const';
import { PlaceComment } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly http = inject(HttpClient);

  public getComments(id: string) {
    return this.http.get<PlaceComment[]>(`${ApiRoute.Comments}/${id}`);
  }
}
