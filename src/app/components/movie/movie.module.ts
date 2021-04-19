import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieComponent } from './movie.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    MovieComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
