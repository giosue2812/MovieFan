import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { MovieForList } from 'src/app/models/Movie/MovieForList';
import { NoticeForm } from 'src/app/models/Notice/Form/NoticeForm';
import { Notice } from 'src/app/models/Notice/notice';
import { NoticeByMovie } from 'src/app/models/Notice/NoticeByMovie';
import { User } from 'src/app/models/User/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class NoticeService {

  constructor(private _http:HttpClient) { }

  getList(){
    return this._http.get<Notice[]>(environment.url+'notice');
  }
  getNotice(id:number):Observable<Notice>{
    return this._http.get<Notice>(environment.url+'notice/'+id).pipe(mergeMap((n:Notice)=>{
      return this._http.get<MovieForList>(environment.url+'movie/'+n.idMovie).pipe(map((m:MovieForList)=>{
        n.movie = m;
          return n;
        }))
        .pipe(mergeMap((n:Notice)=>{
          return this._http.get<User>(environment.url+'user/'+n.idUsers).pipe(map((u:User)=>{
            n.user = u;
            return n;
          }))
        }))}))
  }
  getNoticeByMovie(idMovie:number){
    return this._http.get<NoticeByMovie>(environment.url+'notice/getNoticeByMovie/'+idMovie);
  }
  createNotice(form:NoticeForm){
    return this._http.post<number>(environment.url+'notice',form);
  }

}
