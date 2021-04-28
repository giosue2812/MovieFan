import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PersonalUser } from 'src/app/models/User/PersonalUser';
import { User } from 'src/app/models/User/User';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable({
  providedIn: 'any'
})
export class UserResolver implements Resolve<User> {
  constructor(private _common:CommonService){}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this._common.getUser(route.params["id"])
  }
}
