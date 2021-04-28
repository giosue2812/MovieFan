import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map,mergeMap} from 'rxjs/operators'
import { Castings } from 'src/app/models/Movie/Castings';
import { FormCasting } from 'src/app/models/Movie/Form/FormCasting';
import { MovieForm } from 'src/app/models/Movie/Form/MovieForm';
import { MovieByPerson } from 'src/app/models/Movie/MovieByPerson';
import { MovieByProductOrWritrt } from 'src/app/models/Movie/MovieByProductOrWriter';
import { MovieForList } from 'src/app/models/Movie/MovieForList';
import { MovieWithDirctorAndWriter } from 'src/app/models/Movie/MovieWithDirectorAndWriter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class MovieService {
  id:number;
  constructor(
    private _http:HttpClient
  ) { }
  
  getListMovie():Observable<MovieForList[]>{
    return this._http.get<MovieForList[]>(environment.url+"movie");
  }

  getListMovieByPerson(id:number):Observable<MovieByPerson>{
    return this._http.get<MovieByPerson>(environment.url+"Person/GetPersonMovie/"+id);
  }
  getListMovieByProdOrWriter(id:number):Observable<MovieByProductOrWritrt>{
    return this._http.get<MovieByProductOrWritrt>(environment.url+"Person/MovieByProdWrit/"+id);
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
  createMovie(formMovie:MovieForm,formCasting?:FormCasting)
  {
    return this._http.post<number>(environment.url+"movie",formMovie).subscribe((data)=>{

      for(let i = 0;i<formCasting.addCastings.length;i++)
      {
        formCasting.addCastings[i].idMovie = data;
        this._http.post<number>(environment.url+'movie/addCasting',formCasting.addCastings[i]).subscribe((data)=>{console.log(data)})
      }  
    });
  }
  editMovie(formMovie:MovieForm,formCasting?:FormCasting)
  {
    return this._http.put<boolean>(environment.url+'movie',formMovie).subscribe((data)=>{
      if(data)
      {
        for(let i = 0;i<formCasting.addCastings.length;i++)
        {
          formCasting.addCastings[i].idMovie = formMovie.id;
          this._http.post<number>(environment.url+'movie/addCasting',formCasting.addCastings[i]).subscribe((data)=>{console.log(data)})
        }
      }
    });
  }
}
