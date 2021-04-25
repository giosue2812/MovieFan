import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Notice } from 'src/app/models/Notice/notice';
import { NoticeService } from '../service/notice.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  notice:Notice[];
  constructor(private _service:NoticeService,private dialogService:NbDialogService) { }

  ngOnInit(): void {
    this._service.getList().subscribe((data)=>{
      this.notice = data;
    })
  }
  openModal(idNotice:number){
    this.dialogService.open(DetailComponent,{
      context:{idNotice:idNotice}
    })
  }
}
