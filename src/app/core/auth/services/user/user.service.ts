import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { LoggedUser } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userSubject = new BehaviorSubject<LoggedUser | null>(null);

  // Публичный user, asObservable не позволяет эмитить новые значения вне сервиса
  public readonly user$ = this.userSubject.asObservable().pipe(distinctUntilChanged());

  public isAuthorized$ = this.user$.pipe(map((user) => !!user));
}
