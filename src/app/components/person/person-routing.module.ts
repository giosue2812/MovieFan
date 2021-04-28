import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from 'src/app/shared/guard/is-admin.guard';
import { IsAuthGuard } from 'src/app/shared/guard/is-auth.guard';
import { UpdateComponent } from '../movie/update/update.component';
import { PersonComponent } from './person.component';
import { PersonResolver } from './service/person.resolver';
import { UpdatePersonComponent } from './update-person/update-person.component';

const routes: Routes = [
  {path:'',canActivate:[IsAuthGuard,IsAdminGuard],component:PersonComponent},
  {path:'updatePerson/:id',canActivate:[IsAuthGuard,IsAdminGuard],resolve:{objPerson:PersonResolver},component:UpdatePersonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
