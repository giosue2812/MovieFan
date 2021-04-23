import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/Person/Person';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  getPersons():Observable<Person[]>{
    return this._http.get<Person[]>(environment.url+'person');
  }
}
