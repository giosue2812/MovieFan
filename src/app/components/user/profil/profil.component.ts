import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { User } from 'src/app/models/User/User';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  items:NbMenuItem[] = [];
  user:User;
  constructor(private _common:CommonService) { }

  ngOnInit(): void {
    this._common.getUser(1).subscribe((data)=>{
      this.user = data;
    })
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
