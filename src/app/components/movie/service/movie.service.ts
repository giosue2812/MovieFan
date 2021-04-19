import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieForList } from 'src/app/models/MovieForList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  movie:MovieForList[];
  constructor(
    private _http:HttpClient
  ) { }
  
  getListMovie():Observable<MovieForList[]>
  {
    return this._http.get<MovieForList[]>(environment.url+"movie");
  }

}
