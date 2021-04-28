import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Person } from 'src/app/models/Person/Person';
import { CommonService } from 'src/app/shared/services/common.service';
import { InsertComponent } from '../insert/insert.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  person:Person[];
  constructor(private _common:CommonService,private _dialogService:NbDialogService) { }

  ngOnInit(): void {
    this.loadItem()
  }

  loadItem(){
    this._common.getPersons().subscribe((data)=>{
      this.person = data
    })
  }
  openModalInsert(){
    let ref = this._dialogService.open(InsertComponent);
    ref.onClose.subscribe(()=>{
      this.loadItem()
    })
  }
}
