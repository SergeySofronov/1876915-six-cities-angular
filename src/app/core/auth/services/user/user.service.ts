import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthData, LoggedUser } from 'src/app/core/models';
import { ApiRoute } from '@app/const';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);

  checkAuth(): Observable<LoggedUser> {
    return this.http.get<LoggedUser>(`${ApiRoute.Login}`);
  }

  login(authData: AuthData): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(`${ApiRoute.Login}`, authData);
  }

  logout(): Observable<void> {
    return this.http.delete<void>(`${ApiRoute.Logout}`);
  }
}
