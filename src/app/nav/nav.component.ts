import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { UserService } from '../components/user/service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLinkAdmin:NbMenuItem[] = []
  listeLinkUser:NbMenuItem[] = []
  constructor(public _service:UserService) {}

  ngOnInit(): void {
    this.listeLinkAdmin = [
      {
        title:'Movie',
        icon:'film-outline',
        expanded:true,
        children:[
          {
            title:'List',
            link:'movie',
            icon:'list-outline'
          },
          {
            title:'Create',
            link:'movie/create',
            icon:'plus-circle-outline'
          },
          {
            title:'Custom',
            link:'movie/custom',
            icon:'funnel-outline'
          }
        ],
      },
      {
        title:'Notice',
        icon:'book-open-outline',
        expanded:true,
        children:[
          {
            title:'List',
            link:'notice',
            icon:'list-outline'
          }
        ]
      },
      {
        title:'Personnes',
        icon:'person-outline',
        expanded:true,
        children:[
          {
            title:'List',
            link:'person',
            icon:'list-outline'
          }
        ]
      },
      {
        title:'Utilisateur',
        icon:'person-outline',
        expanded:true,
        children:[
          {
            title:'Profil',
            link:'user/profil',
            icon:'clipboard-outline'
          }
        ]
      }
    ]
    this.listeLinkUser = [
      {
        title:'Movie',
        icon:'film-outline',
        expanded:true,
        children:[
          {
            title:'List',
            link:'movie',
            icon:'list-outline'
          },
          {
            title:'Custom',
            link:'movie/custom',
            icon:'funnel-outline'
          }
        ],
      }
    ]
  }

}
