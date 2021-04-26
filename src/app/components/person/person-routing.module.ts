import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from '../movie/update/update.component';
import { PersonComponent } from './person.component';
import { PersonResolver } from './service/person.resolver';
import { UpdatePersonComponent } from './update-person/update-person.component';

const routes: Routes = [
  {path:'',component:PersonComponent},
  {path:'updatePerson/:id',resolve:{objPerson:PersonResolver},component:UpdatePersonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
