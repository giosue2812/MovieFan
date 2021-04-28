import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from './components/user/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private _router:Router,public _service:UserService){}
  title = 'MovieFan';

  logout(){
    this._service.logout();
  }
}
