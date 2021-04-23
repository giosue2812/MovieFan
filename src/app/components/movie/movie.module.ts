import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieComponent } from './movie.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './list/detail/detail.component';
import { MovieService } from './service/movie.service';
import { CreateComponent } from './create/create.component';
import { CustomListComponent } from './list/custom-list/custom-list.component';
import { ListDirectorComponent } from './list/custom-list/list-director/list-director.component';
import { ListActeurComponent } from './list/custom-list/list-acteur/list-acteur.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    MovieComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    CustomListComponent,
    ListDirectorComponent,
    ListActeurComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  providers:[MovieService]
})
export class MovieModule { }
