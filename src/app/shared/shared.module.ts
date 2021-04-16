import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports:[
    NbCardModule
  ]
})
export class SharedModule { }