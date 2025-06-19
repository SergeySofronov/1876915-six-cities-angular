import { inject, Injectable } from '@angular/core';
import { EnvironmentService } from '../../../services/environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly tokenKey = inject(EnvironmentService).getValue('tokenKey') ?? 'TOKEN';

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
