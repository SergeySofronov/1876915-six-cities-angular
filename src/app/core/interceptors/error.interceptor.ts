import { catchError, throwError } from "rxjs";
import { HttpHandlerFn, HttpInterceptorFn, HttpStatusCode } from "@angular/common/http";
import { inject } from "@angular/core";
import { JwtService } from "../auth/services/jwt/jwt.service";

export const errorInterceptor: HttpInterceptorFn = (req, next: HttpHandlerFn) => {

  const jwtService = inject(JwtService);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === HttpStatusCode.Unauthorized) {
        jwtService.dropToken();
      }

      //show notification
      console.log(error);

      return throwError(() => error);
    })
  );
};