import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/User';
import { AdminService } from 'src/app/shared/services/admin.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:User[];
  constructor(private _common:CommonService,private _admin:AdminService) { }

  ngOnInit(): void {
    this._common.getUsers().subscribe((data)=>{this.user = data})
  }
  banish(id:number){
    this._admin.switchActiveUser(id).subscribe((data)=>{console.log(data)})
  }
  switchUserAdmin(id:number){
    this._admin.switchAdminUser(id).subscribe((data)=>{console.log(data); this.ngOnInit()})
  }

}
