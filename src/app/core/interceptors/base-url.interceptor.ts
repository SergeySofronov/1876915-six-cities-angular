import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { EnvironmentService } from '@core/services';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl = inject(EnvironmentService).apiUrl;

  // Если URL уже абсолютный, не изменяем его
  if (req.url.startsWith('http')) {
    return next(req);
  }

  // Добавляем базовый URL к относительным путям
  const request = req.clone({
    url: `${apiUrl}${req.url}`
  });

  return next(request);
};
