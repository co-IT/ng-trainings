import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Processing Request:', req);

    const clone = req.clone({ setHeaders: { 'X-Language': 'DE' }});

    return next
      .handle(clone)
      .do(event => {
        if (event instanceof HttpResponse) {
          console.log(event.body);
        }
      })
      .catch(err => {
        console.warn('HTTP Endpoint Error', err);
        return Observable.throw(err);
      });
  }
}
