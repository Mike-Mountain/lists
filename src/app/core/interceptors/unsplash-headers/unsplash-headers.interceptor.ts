import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UnsplashHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('unsplash')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Client-ID ${environment.accessKey}`,
          'Accept-Version': 'v1',
        },
      });
    }
    return next.handle(request);
  }
}
