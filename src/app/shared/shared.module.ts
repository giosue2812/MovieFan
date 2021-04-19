import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbAccordionModule } from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule
  ],
  exports:[
    NbCardModule,
    NbButtonModule,
    NbAccordionModule
  ]
})
export class SharedModule { }
