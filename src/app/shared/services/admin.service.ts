import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  switchActiveUser(idUser:number){
    return this._http.get<boolean>(environment.url+'user/switchActiveUser/'+idUser);
  }
  switchNotiveActive(idNotice:number)
  {
    return this._http.get<boolean>(environment.url+'notice/switchNoticeActive/'+idNotice);
  }
}
