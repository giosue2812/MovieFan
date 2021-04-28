import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from 'src/app/shared/guard/is-admin.guard';
import { IsAuthGuard } from 'src/app/shared/guard/is-auth.guard';
import { NoticeComponent } from './notice.component';

const routes: Routes = [
  {path:'',canActivate:[IsAuthGuard,IsAdminGuard],component:NoticeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
