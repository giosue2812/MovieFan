import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/components/user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  constructor(private _service:UserService,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._service.decodeToken() == undefined){
        return this._router.navigate(["/user/login"]);
      } 
      else{
        return true;
      }
  }
  
}
