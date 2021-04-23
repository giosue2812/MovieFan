import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    NoticeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule
  ]
})
export class NoticeModule { }
