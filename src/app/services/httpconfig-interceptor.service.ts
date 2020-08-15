import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpconfigInterceptorService implements HttpInterceptor {

  constructor(private xsrfToken : HttpXsrfTokenExtractor) { }
  intercept(request : HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    });
    return next.handle(authReq);
}
}
