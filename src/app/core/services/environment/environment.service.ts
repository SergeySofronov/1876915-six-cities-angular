import { inject, Injectable, InjectionToken } from "@angular/core";
import { EnvironmentInterface } from "src/environments/environment.interface";

import { environment } from 'src/environments/environment';
import { API_TIMEOUT, DEFAULT_TOKEN_NAME } from "@app/const";

export const ENVIRONMENT = new InjectionToken<EnvironmentInterface>('environment', {
  factory: () => environment,
  providedIn: 'root',
});

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private readonly environment = inject<EnvironmentInterface>(ENVIRONMENT, { optional: true });

  private getValue<T extends keyof EnvironmentInterface>(key: T): EnvironmentInterface[T] | undefined {
    return this.environment?.[key] as EnvironmentInterface[T] | undefined;
  }

  public get tokenKey() {
    return this.getValue('tokenKey') ?? DEFAULT_TOKEN_NAME;
  }

  public get apiUrl() {
    return this.getValue('apiUrl') ?? 'https://15.design.htmlacademy.pro/six-cities/';
  }

  public get apiTimeout() {
    return this.getValue('apiTimeout') ?? API_TIMEOUT;
  }
}
