import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person/Person';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  person:Person[];
  constructor(private _common:CommonService) { }

  ngOnInit(): void {
    this._common.getPersons().subscribe((data)=>{
      this.person = data;
    })
  }

}
