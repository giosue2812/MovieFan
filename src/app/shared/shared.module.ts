import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbAccordionModule,NbLayoutModule, NbListModule,} from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbLayoutModule,
    NbListModule
  ],
  exports:[
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbLayoutModule,
    NbListModule
  ]
})
export class SharedModule { }
