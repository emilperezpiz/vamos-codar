import { AuthService } from './../services/auth.service'
import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http'
import { catchError, Observable, tap } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  public appIdentifier = environment.identifier;
  constructor(private serviceAuth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const httpReq = req.clone({
      //  setHeaders: {'Content-Type': 'application/json'}
      url: req.url.replace('http://', 'https://'),
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'pt',
        'Accept-Code': this.appIdentifier,
        Authorization: `Bearer ${this.serviceAuth.getToken()}`,
      }),
    });
    console.log(this.appIdentifier);
    return next.handle(httpReq).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            //Manejar la respuesta
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status == 401) {
            //
          }
        }
      )
    );
  }
}
