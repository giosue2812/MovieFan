import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieComponent } from './movie.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './list/detail/detail.component';
import { MovieService } from './service/movie.service';


@NgModule({
  declarations: [
    MovieComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  providers:[MovieService]
})
export class MovieModule { }
