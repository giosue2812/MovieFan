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
            link:'',
            icon:'list-outline'
          }
        ]
      }
    ]
  }

}
