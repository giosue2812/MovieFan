import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieForList } from 'src/app/models/Movie/MovieForList';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<MovieForList[]> {

  constructor(private _service:MovieService){}

  resolve(route: ActivatedRouteSnapshot): Observable<MovieForList[]> {
    return this._service.getListMovie();
  }
}
