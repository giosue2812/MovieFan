import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from 'src/app/shared/guard/is-admin.guard';
import { IsAuthGuard } from 'src/app/shared/guard/is-auth.guard';
import { CreateComponent } from './create/create.component';
import { CustomListComponent } from './list/custom-list/custom-list.component';
import { MovieComponent } from './movie.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:MovieComponent},
  {path:"create",canActivate:[IsAuthGuard,IsAdminGuard],component:CreateComponent},
  {path:"custom",component:CustomListComponent},
  {path:"update/:id",canActivate:[IsAuthGuard,IsAdminGuard],component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
