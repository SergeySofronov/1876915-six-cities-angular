import { inject, Injectable } from '@angular/core';
import { EnvironmentService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly tokenKey = inject(EnvironmentService).tokenKey;

  getToken(): string {
    return localStorage.getItem(this.tokenKey) ?? '';
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  dropToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
