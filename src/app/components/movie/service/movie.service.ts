import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map,mergeMap} from 'rxjs/operators'
import {Casting, Castings } from 'src/app/models/Castings';
import { MovieForList } from 'src/app/models/MovieForList';
import { MovieWithDirctorAndWriter } from 'src/app/models/MovieWithDirectorAndWriter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class MovieService {
  constructor(
    private _http:HttpClient
  ) { }
  
  getListMovie():Observable<MovieForList[]>
  {
    return this._http.get<MovieForList[]>(environment.url+"movie");
  }
  
  getDetailMovie(id:number):Observable<Castings>
  {
    return this._http.get<Castings>(environment.url+"movie/MovieCasting/"+id)
    .pipe(
      mergeMap
      (
      (c:Castings)=>
      {
        return this._http.get<MovieWithDirctorAndWriter>(environment.url+"movie/MovieDirectorWriter/"+c.movies.id)
        .pipe(
          map((m:MovieWithDirctorAndWriter)=>{
            c.movieWithDirctorAndWriter = m;
            return c;
          })
        )
      }
    ));
  }
}
