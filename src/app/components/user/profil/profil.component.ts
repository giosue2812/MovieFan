import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TokenResponse } from 'src/app/models/User/token';
import { User } from 'src/app/models/User/User';
import { CommonService } from 'src/app/shared/services/common.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  items:NbMenuItem[] = [];
  user:TokenResponse;
  constructor(private _service:UserService) { }

  ngOnInit(): void {
    this.user = this._service.decodeToken();
    this.menuAdmin();
  }
  menuAdmin(){
    this.items =[
      {
        title:'Liste des utilisateurs',
        link:'/user',
        icon:'people-outline'
      }
    ]
  }

}
