import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLink:NbMenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.listeLink = [
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
            title:'list',
            link:'notice/list',
            icon:'list-outline'
          }
        ]
      }
    ]
  }

}
