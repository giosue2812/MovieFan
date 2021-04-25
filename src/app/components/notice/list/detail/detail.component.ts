import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/models/Notice/notice';
import { AdminService } from 'src/app/shared/services/admin.service';
import { NoticeService } from '../../service/notice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  notice:Notice
  idNotice:number;
  constructor(private _service:NoticeService,private _admin:AdminService) { }

  ngOnInit(): void {
    this.initModel()
  }
  initModel(){
    this._service.getNotice(this.idNotice).subscribe((data)=>{this.notice = data})
  }
  switchBanish(idUser:number){
    this._admin.switchActiveUser(idUser).subscribe(()=>{
      this.initModel()
    })
  }
  switchActiveComment(id:number){
    this._admin.switchNotiveActive(id).subscribe(()=>{
      this.initModel()
    })
  }
}
