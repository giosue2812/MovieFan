import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ListComponent } from '../list/list.component';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  form:FormGroup
  constructor(private _builder:FormBuilder,private _service:PersonService,private dialogRef:NbDialogRef<ListComponent>) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'firstName':[null],
      'lastName':[null]
    })
  }
  submitForm(){
    this._service.insertPerson(this.form.getRawValue()).subscribe((data)=>{
      console.log(data);
      this.dialogRef.close()
    })
  }
}
