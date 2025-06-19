import { inject, Injectable, InjectionToken } from "@angular/core";
import { EnvironmentInterface } from "src/environments/environment.interface";

import { environment } from 'src/environments/environment';

export const ENVIRONMENT = new InjectionToken<EnvironmentInterface>('environment', {
  factory: () => environment,
  providedIn: 'root',
});

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private readonly environment = inject<EnvironmentInterface>(ENVIRONMENT, { optional: true });

  getValue<T extends keyof EnvironmentInterface>(key: T): EnvironmentInterface[T] | undefined {
    return this.environment?.[key] as EnvironmentInterface[T] | undefined;
  }
}