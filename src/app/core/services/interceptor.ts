import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthAPIService } from './auth-api.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      if (request.method === 'GET') {
        const updatepRequest = request.clone({
          setHeaders: {
            'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
            Pragma: 'no-cache',
            Expires: '0'
          }
        });

        return next.handle(updatepRequest);

      }
      return next.handle(request);

    }

}
