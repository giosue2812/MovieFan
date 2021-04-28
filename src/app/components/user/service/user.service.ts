import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from 'src/app/models/User/Form/loginForm';
import { RegisterForm } from 'src/app/models/User/Form/RegisterForm';
import { ResetPassword } from 'src/app/models/User/Form/ResetPasswordForm';
import { TokenResponse } from 'src/app/models/User/token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  
  resetPassword(form:ResetPassword){
    return this._http.put<boolean>(environment.url+'user/ResetPassword',form);
  }
  register(form:RegisterForm){
    return this._http.post<number>(environment.url+'user',form);
  }
  login(form:LoginForm){
    return this._http.post(environment.url+'user/login',form);
  }
}
