import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/models/Person/Person';
import { PersonService } from './person.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Person> {
  constructor(private _service:PersonService){}
  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    return this._service.getPerson(route.params["id"]);
  }
}
