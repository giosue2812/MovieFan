import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { ListComponent } from '../../movie/list/list.component';
import { NoticeComponent } from '../../movie/list/notice/notice.component';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  idM:number
  form:FormGroup
  idU:number = 1;
  constructor(private _builder:FormBuilder,protected dialogRef:NbDialogRef<NoticeComponent>,private _service:NoticeService,private router:Router) {
   }

  ngOnInit(): void {
    this.form = this._builder.group({
      'content':[null,Validators.maxLength(500)],
      'idMovie':[null],
      'idUsers':[null]
    })
  }
  submitForm(){
    this._service.createNotice(this.form.getRawValue()).subscribe((data)=>{
      console.log(data)
    })
    this.dialogRef.close();
  }
}
