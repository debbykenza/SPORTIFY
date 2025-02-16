import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserStorageService } from '../storage/user-storage.service';



export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

    const router = inject(Router);

    const access_token = UserStorageService.getToken();
  let clonedRequest = req;
  if (access_token != null) {
    const headers = new HttpHeaders()
      .append("Authorization", "Bearer " + access_token)
      .append("Content-Type", "application/json");
     clonedRequest = req.clone({ headers });
  }
      return next(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            UserStorageService.signOut();
            router.navigate(['/login']);
          } else if (error.status === 403) {
            router.navigate(['/unauthorized']);
          }
          return throwError(() => error);
        })
      )
  }


export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: authInterceptor,
  multi: true,
};