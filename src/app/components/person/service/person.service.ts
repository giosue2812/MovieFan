import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonFormAdd } from 'src/app/models/Person/Form/PersonFormAdd';
import { Person } from 'src/app/models/Person/Person';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  person:Person
  constructor(private _http:HttpClient) { }

  getPerson(id:number){
    return this._http.get<Person>(environment.url+'person/'+id);
  }
  updatePerson(form:Person){
    return this._http.put<boolean>(environment.url+'person',form);
  }
  insertPerson(form:PersonFormAdd){
    return this._http.post<number>(environment.url+'person',form);
  }
}
