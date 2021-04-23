import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {
  
  choiceListToShow:number;
  choiceListForm:FormGroup;
  choice:any[] = [];
  constructor(
    private _builder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.choiceList();
    this.choice = [
      {
        id:1,
        title : 'Par Producteur'
      },
      {
        id:2,
        title:'Par Acteur'
      }
    ]
  }

  choiceList(){
    this.choiceListForm = this._builder.group({
      'ChoiceList':[null,[Validators.required]]
    })
  }
  onValide(){
    this.choiceListToShow = this.choiceListForm.get('ChoiceList').value;
  }
}
