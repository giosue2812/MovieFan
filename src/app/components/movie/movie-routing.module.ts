import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CustomListComponent } from './list/custom-list/custom-list.component';
import { MovieComponent } from './movie.component';
import { MovieResolver } from './service/movie.resolver';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",resolve:{monObject:MovieResolver},component:MovieComponent},
  {path:"create",component:CreateComponent},
  {path:"custom",component:CustomListComponent},
  {path:"update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
