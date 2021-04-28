import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router:Router){}
  title = 'MovieFan';
  connected = true;

  test(){
    this.connected = !this.connected
    this._router.navigate(["user/login"])
  }
}
