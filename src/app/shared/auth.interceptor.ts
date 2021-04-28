import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../components/user/service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _user:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    if(token !=""){
      this._user.decodeToken()
      let clone = request.clone({setHeaders:{"Authorization":"bearer "+token}});
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
