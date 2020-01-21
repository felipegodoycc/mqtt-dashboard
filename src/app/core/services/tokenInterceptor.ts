import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthAPIService } from './auth-api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;

  constructor(private authService: AuthAPIService) {
    this.token = authService.getToken();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      if ( this.authService.isLogged() ) {
        const updatepRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`
          }
        });
        return next.handle(updatepRequest);
      }
      return next.handle(request);
    }

}
