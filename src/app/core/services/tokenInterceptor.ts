import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthAPIService } from './auth-api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;

  constructor(private authService: AuthAPIService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      if ( this.authService.getToken() ) {
        const updatepRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.authService.getToken()}`
          }
        });
        return next.handle(updatepRequest);
      }
      return next.handle(request);
    }

}
