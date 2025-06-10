import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { LoggedUser } from '@app/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly currentUserSubject = new BehaviorSubject<LoggedUser | null>(null);
  public readonly currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthorized = this.currentUser.pipe(map((user) => !!user)); //!!!
  public getUserData = (): LoggedUser | null => this.currentUserSubject.getValue(); //!!!
}
