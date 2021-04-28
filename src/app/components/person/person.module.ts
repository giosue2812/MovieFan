import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { ListComponent } from './list/list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InsertComponent } from './insert/insert.component';


@NgModule({
  declarations: [
    PersonComponent,
    ListComponent,
    UpdatePersonComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule
  ]
})
export class PersonModule { }
