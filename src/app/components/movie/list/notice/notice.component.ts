import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateComponent } from 'src/app/components/notice/create/create.component';
import { NoticeService } from 'src/app/components/notice/service/notice.service';
import { NoticeByMovie } from 'src/app/models/Notice/NoticeByMovie';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  notice:NoticeByMovie
  @Input() id:number;
  constructor(private _service:NoticeService,private _dialogService:NbDialogService) { }

  ngOnInit(): void {
    this.loadNotice();
  }
  loadNotice(){
    this._service.getNoticeByMovie(this.id).subscribe((data)=>{
      this.notice = data
    });
  }
  openModalCreateNotice(idMovie:number){
    let ref = this._dialogService.open(CreateComponent,{context:{idM:idMovie}});
    ref.onClose.subscribe(()=>{
      this.loadNotice()
    })
  }

}
