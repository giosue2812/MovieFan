import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './list/detail/detail.component';
import { NoticeService } from './service/notice.service';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    NoticeComponent,
    ListComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    SharedModule
  ],
  providers:[NoticeService]
})
export class NoticeModule { }
